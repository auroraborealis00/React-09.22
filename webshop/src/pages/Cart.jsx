import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import styles from "../css/Cart.module.css";


function Cart() {
    const [cart, renewCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );
    const [parcelMachines, setParcelMachines] = useState([]);
    const pmRef = useRef();
    

    useEffect(() => {
fetch("https://www.omniva.ee/locations.json")
.then(res => res.json()) // res tähendab response //
.then(json => setParcelMachines(json))
    }, []);

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

    const sendOrder = () => {
        console.log(pmRef.current.value);
        console.log(cart);
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
            <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src={require("../images/minus.png")} alt="" />
            <div>{element.quantity} tk</div>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src={require("../images/plus.png")} alt="" />
            </div>
            <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
            <img className={styles.button} onClick={() => del(index)} src={require("../images/close.png")} alt="" />
        </div>)}

        <div className={styles.cart__bottom}>
            <div>Sum: {calculateCartSum()} €</div>

<select ref={pmRef}>{parcelMachines
    .filter(element => element.A0_NAME === "EE")
    .map(element => 
    <option key={element.NAME}>{element.NAME}</option>)}
    </select>

<button onClick={sendOrder}>Vormista tellimus</button>
</div>
    </div>  );
}

export default Cart;