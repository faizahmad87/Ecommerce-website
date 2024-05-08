import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProduct } from '../Product';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProduct(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.Price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;