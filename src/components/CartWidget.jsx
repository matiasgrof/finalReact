import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const context = useContext(CartContext);
    return (
        <Badge badgeContent={context.cartList.length} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;