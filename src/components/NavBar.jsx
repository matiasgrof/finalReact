import { AppBar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>U-SHOP</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "white"}}><MenuItem>Sin Alcohol</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Vinos</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Licores</MenuItem></Link>                    
                </Center>
                <Right>
                     {
                        user
                        ? 
                        <div style={{display: "flex", flexWrap:"nowrap", flexDirection:"row", alignItems:"center"}}>
                            <MenuItem> { user.displayName || user.email } </MenuItem>
                            <MenuItem><Button onClick={logout} style={{textDecoration: "none", color: "white"}}>LOGOUT</Button></MenuItem>
                        </div>
                        : 
                        <div>
                            <MenuItem><Link to='/login' style={{textDecoration: "none", color: "white"}}>SIGN IN</Link></MenuItem>                          
                        </div>
                    }
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>                            
                     
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;