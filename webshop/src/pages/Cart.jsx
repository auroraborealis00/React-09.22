import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import styles from "../css/Cart.module.css";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


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
    const api = new WooCommerceRestApi({
        url: "http://192.168.64.2",
        consumerKey: "ck_e6a002fb6ab67ea7446cf8a628668d72b92d00d6",
        consumerSecret: "cs_c059e1ed42dbd82d28347eb13172a7e2ee91c42b",
        version: "wc/v3",
        queryStringAuth: true,
        axiosConfig: {
            headers: {'Content-Type': 'application/json'},
          }
      });
const woocommerceCart = cart.map(element => { 
    return {product_id: element.product.id, quantity: element.quantity}
});
api.post("orders", {"line_items": woocommerceCart})
.then(res => pay(res.data.id))

}
    
    const pay = (orderId) => {
        const data = 
            {
                "api_username": "92ddcfab96e34a5f",
                "account_name": "EUR3D1",
                "amount": calculateCartSum(),
                "order_reference": orderId,
                "nonce": "a9b7f7easda2123" + Math.random() * 999999 + new Date(),
                "timestamp": new Date(),
                "customer_url": "https://react-09-22-v.web.app"
                }

                fetch ("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
                  "method": "POST",
                  "body": JSON.stringify(data),
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
                }
              }).then(res => res.json())
              .then(json => window.location.href = json.payment_link );
          
                  
        
    }

    return ( <div>
        
        { cart.length > 0 && <div> Cart includes {cart.length} items</div> }
        { cart.length === 0 && <div> Cart is empty </div> }
        { cart.length > 0 && <button onClick={empty}>Empty</button> }

        { cart.map((element,index) =>
        <div key={index} className={styles.product}>
            { element.product.images[0] && <img className={styles.image} src={element.product.images[0].src} alt="" />}
            <div className={styles.name}>{element.product.name}</div>
            <div className={styles.price}>{element.product.price} €</div>
            <div className={styles.quantity}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src={"/images/minus.png"} alt="" />
            <div>{element.quantity} tk</div>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src={"/images/plus.png"} alt="" />
            </div>
            <div className={styles.sum}>{ (element.product.price * element.quantity).toFixed(2) } €</div>
            <img className={styles.button} onClick={() => del(index)} src={"/images/close.png"} alt="" />
        </div>)}

        { cart.length > 0 &&
        <div className={styles.cart__bottom}>
            <div>Sum: {calculateCartSum()} €</div>

<select ref={pmRef}>{parcelMachines
    .filter(element => element.A0_NAME === "EE")
    .map(element => 
    <option key={element.NAME}>{element.NAME}</option>)}
    </select>

<button onClick={sendOrder}>Vormista tellimus</button>
</div>}
{ cart.length === 0 && 
<div>
<div>Ostukorvis pole tooteid</div>
<div>Vajuta <Link to="/tooted">siia</Link>, et jätkata ostlemist</div>
</div> }

    </div>  );
}

export default Cart;