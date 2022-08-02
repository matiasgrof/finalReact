import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import CartContextProvider from "../components/CartContext";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import AuthContextProvider from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';



const Home = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
            <AuthContextProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ProtectedRoute><ItemListContainer /></ProtectedRoute>} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </AuthContextProvider>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;