import { useState } from "react";
import styles from "../css/Cart.module.css";


function Cart() {
    const [cart, renewCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

    const del = (index) => {
        cart.splice(index,1);
        renewCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    const empty = () => {
        renewCart ([]);
        localStorage.setItem("cart", JSON.stringify([]));
    }
    const calculateCartSum = () => {
        let sum = 0;
        cart.forEach(element => sum = sum + element.product.price * element.quantity);
return sum.toFixed(2);
    }

    const decreaseQuantity = (productIndex) => {
        cart[productIndex].quantity = cart[productIndex].quantity -1;
        renewCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));

    }
    const increaseQuantity = (productIndex) => {
        cart[productIndex].quantity = cart[productIndex].quantity +1;
        renewCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));

    }
    return ( <div>
        
        { cart.length > 0 && <div> Cart includes {cart.length} items</div> }
        { cart.length === 0 && <div> Cart is empty </div> }
        { cart.length > 0 && <button onClick={empty}>Empty</button> }

        { cart.map((element,index) =>
        <div key={index} className={styles.product}>
            <img className={styles.image} src={element.product.image} alt="" />
            <div className={styles.name}>{element.product.name}</div>
            <div className={styles.price}>{element.product.price} €</div>
            <button onClick={() => decreaseQuantity(index)}>-</button>
            <div className={styles.quantity}>{element.quantity} tk</div>
            <button onClick={() => increaseQuantity(index)}>+</button>
            <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
            <button onClick={() => del(index)}>x</button>
        </div>)}
        <div>Sum: {calculateCartSum()} €</div>
    </div>  );
}

export default Cart;