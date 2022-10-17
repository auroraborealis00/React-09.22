import { useRef } from "react" ;
import { useState } from "react" ;

function LisaTegelane() {
  const [s6num, uuendaS6num] = useState("");
  const nimiRef = useRef ();
    
   const lisa = () => {
    if (nimiRef.current.value === "") {
uuendaS6num("Tühja nimega ei saa sisestada");
    } else {
        uuendaS6num("Tegelane lisatud");
    }
   }
    
    
    return ( 
    <div>
  
    <div>{s6num}</div>
    <label>Tegelase nimi</label> <br />
    <input ref={nimiRef} type="text" /> <br />
    <button onClick={lisa}>Lisa uus</button> <br/>
    </div> );
}

export default LisaTegelane;