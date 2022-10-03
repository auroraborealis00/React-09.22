import { useRef } from "react" ;
import { useState } from "react";

function Lisatoode() {
const [s6num, uuendaS6num] = useState("Lisa uus toode!");
const nimiRef = useRef();
const hindRef = useRef();
const piltRef = useRef();



const lisa = () => {
        if (nimiRef.current.value === "") {
            uuendaS6num("Nime sisestusväli ei saa olla tühi!");
        } else {
        uuendaS6num("Toode lisatud!");
        let tootedLS = localStorage.getItem("tooted"); 
        tootedLS = JSON.parse(tootedLS) || [];
        const uusToode = {
            "nimi": nimiRef.current.value,
            "hind": hindRef.current.value,
            "pilt": piltRef.current.value
        }
        tootedLS.push(uusToode);
        tootedLS = JSON.stringify(tootedLS);
        localStorage.setItem("tooted", tootedLS);
    }

    }

    return ( 
    <div>
        <div>{s6num}</div>
        <label>Uue toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
     
        <label>Hind</label> <br />
        <input ref={hindRef} type="text" /> <br />
    
        <label>Pilt</label> <br />
        <input ref={piltRef} type="text" /> <br />
        <button onClick={lisa}>Sisesta</button> <br />
    </div> );
}

export default Lisatoode;