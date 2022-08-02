import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const pay = () => {
        
        // const filterCartList = cartList.filter(item => item.id !== id);
        setCartList([])
        // cartList.map(item => {
        //     console.log({item})
        //     deleteProduct( item.id)
        // })
    }
    
    const addToCart = (item, quantity) => {
        let costProduct = item.cost * quantity;
        const filterCartList = cartList.filter(dat => dat.id == item.id);

        if (!filterCartList.length) {
            setCartList([...cartList, { quantity, ...item, costProduct }]);
        }else{
            let filterData = filterCartList[0]; 
            filterData.quantity += quantity; 
            filterData.costProduct = item.cost * filterData.quantity ;
            setCartList(filterCartList);
        }

        setTotalCost(totalCost + costProduct);

        // let total = cartList.map(el => el.quantity * el.cost)
        // setTotalCost(total);
        // console.log("cartList", cartList);
    }

    const deleteProduct = (id) => {
        const filterCartList = cartList.filter(item => item.id !== id);
        let costProduct = 0;
        filterCartList.map(dat => {
            costProduct += dat.cost * dat.quantity;  
        });
        setTotalCost(costProduct);
        setCartList(filterCartList, { costProduct });
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, totalCost,pay}}>
            { children }
        </CartContext.Provider>
    );
};

export default CartContextProvider;