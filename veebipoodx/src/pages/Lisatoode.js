import { useRef } from "react" ;
import { useState } from "react";

function Lisatoode() {
const [s6num, uuendaS6num] = useState("Lisa uus toode!");
const nimiRef = useRef();

const lisa = () => {
        if (nimiRef.current.value === "") {
            uuendaS6num("Nime sisestusväli ei saa olla tühi!");
        } else {
            uuendaS6num("Toode lisatud!");
            let tootedLS = localStorage.getItem("tooted"); // Uncaught TypeError: Assignment to constant variable.
            console.log(tootedLS);
            tootedLS = JSON.parse(tootedLS) || []; // Line 16:7: 'tootedLS' is constant no-const-assign SIIIS MUUDA CONST -> LET' iks
            //Uncaught TypeError: Cannot read properties of null (reading 'push')
            console.log(tootedLS);
            tootedLS.push(nimiRef.current.value);
            console.log(tootedLS);
        tootedLS = JSON.stringify(tootedLS);
        console.log(tootedLS);
    localStorage.setItem("tooted", tootedLS);
    }

    }
// 1. VÕTA KÕIK VANAD VÄÄRTUSED LOCALSTORAGE-ST ---> localStorage.getItem ("VÕTI")
// 2. VÕTAME LOCALSTORAGE-st SAADUD VÄÄRTUSEST JUTUMÄRGID MAHA --->JSON.parse()
// 3. lisa üks juurde --->.push(üksJuurde);
// 4. PNAEME UUELE ARRAY-le JUTUMÄRGID PEALE --->JSON.stringify()
// 5. pane tagasi localStorage-sse ---> localStorage.setItem( "VÕTI", uusVäärtus)
// 'import' and 'export'  may only appear at the top of the level.
    // function lisa() {

    // }
    return ( 
    <div>
        <div>{s6num}</div>
        <label>Uue toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisa}>Sisesta</button> <br />
    </div> );
}

export default Lisatoode;