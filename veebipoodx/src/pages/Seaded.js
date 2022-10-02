import { useRef } from "react";
import { useState } from "react";

function Seaded() {
const [keel, uuendaKeel] = useState(localStorage.getItem("veebilehe_keel") || "est");
const emailRef = useRef();
const telRef = useRef();

///const muudaKeelEst = () => {
///uuendaKeel("est");
///localStorage.setItem("veebilehe_keel", "est");
///}

///const muudaKeelEng = () => {
///uuendaKeel("eng");
///localStorage.setItem("veebilehe_keel", "eng");
///}

///const muudaKeelRus = () => {
///uuendaKeel("rus");
///localStorage.setItem("veebilehe_keel", "rus");
///}

const sisestaTel = () => {
     localStorage.setItem("tel", telRef.current.value);
}

const sisestaEmail = () => {
        localStorage.setItem("email", emailRef.current.value);
}

const muudaKeel = (uusKeel) => {
    uuendaKeel(uusKeel);
    localStorage.setItem("veebilehe_keel", uusKeel);
}
return (
<div>
<label>Meie telefoninumber </label>
<input ref={telRef} defaultValue={localStorage.getItem("tel")}type="text" />
<button onClick={sisestaTel}>Sisesta</button>
<br />
<label>Meie email </label>
<input ref={emailRef} defaultValue={localStorage.getItem("email")} type="text" />
<button onClick={sisestaEmail}>Sisesta</button>
<br />
<button onClick={() => muudaKeel("est")}>est</button>
<button onClick={() => muudaKeel("eng")}>eng</button>
<button onClick={() => muudaKeel("rus")}>rus</button>
{ keel === "est" && <div>Leht on eesti keelne</div>}
{ keel === "eng" && <div>Leht on inglise keelne</div>}
{ keel === "rus" && <div>Leht on vene keelne</div>}

</div>  );

}

export default Seaded;