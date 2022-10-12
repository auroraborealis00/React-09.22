import { useState } from "react";


function Cart() {
    const [cart, renewCart] = useState(JSON.parse(localStorage.getItem("cart")) ||[]);

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
        cart.forEach(element => sum = sum + element.price );
return sum.toFixed(2);
    }


    return (<div>
        { cart.length > 0 && <div> Cart includes {cart.length} items</div> }
        { cart.length === 0 && <div> Cart is empty </div> }
        { cart.length > 0 && <button onClick={empty}>Empty</button> }
        { cart.map((element,index) =>
        <div key={index}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
            <button onClick={() => del(index)}>x</button>
        </div>)}
        <div>Sum: {calculateCartSum()} €</div>
    </div>  );
}

export default Cart;