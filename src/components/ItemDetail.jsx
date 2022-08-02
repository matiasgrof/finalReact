import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const context = useContext(CartContext);

    const filterCartList = context.cartList.filter(dat => dat.id == item.id);
    let filterData = filterCartList[0]; 
    let qty = filterData ? filterData.quantity : 0;

    const onAdd = (quantity) => {
        setItemCount(quantity);
        context.addToCart(item, quantity, (item.cost * quantity));
    }
    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{ item.stock - qty } unidades en stock</Desc>
                    </InfoContainer>
                    {
                        <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
