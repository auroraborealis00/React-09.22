import { useState } from "react";
import { useRef } from "react";


function Avaleht () {
const tegelased = [
    {nimi: "Mickey", perekonnanimi: "Mouse", elukoht: "Disneyland", vanus: 4 },
    {nimi: "Minnie", perekonnanimi: "Mouse", elukoht: "Disneyland", vanus: 4 },
    {nimi: "Winnie", perekonnanimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: 3 },
    {nimi: "Roo", perekonnanimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus: 9 },
    {nimi: "Scooby", perekonnanimi: "Doo", elukoht: "Crystal Cove", vanus: 2 },
];
const [klikitudNimi, uuendaKlikitudNimi] = useState("");
const tegelasedRef = useRef();

const valiTegelane = (klikitudTegelane) => {
    let valitudLS = localStorage.getItem("valitudTegelased");
    valitudLS = JSON.parse(valitudLS) || [];
    valitudLS.push(klikitudTegelane);
    valitudLS = JSON.stringify(valitudLS);
    localStorage.setItem("valitudTegelased", valitudLS);
}
const kuvaNimi = (tegelane)=> {
    // console.log (tegelane.nimi);
   uuendaKlikitudNimi(tegelane.eesnimi);
}
function kustuta (tegelane)  {
    tegelased.splice (tegelane, 1);
    uuendaKlikitudNimi(tegelased.slice());
}
const tyhjenda = () =>{
    uuendaKlikitudNimi ([]);
}
function lisaUusTegelane (){
    tegelased.push(tegelasedRef.current.value);
    uuendaKlikitudNimi(tegelased.slice());
}

    return ( <div>
        <div> Tegelasi on {tegelased.length} tk</div>
{ klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}

 {tegelased.map(tegelane =>
<div>
   
<div>{tegelane.nimi}</div>
    <div>{tegelane.perekonnanimi}</div>
    <div>{tegelane.vanus}</div>
    <div>{tegelane.elukoht}</div>

<button onClick={()=> kuvaNimi(tegelane)}>Kuva nimi</button> 
<button onClick={()=> valiTegelane(tegelane)}>Vali tegelane</button> 
<button onClick={()=> kustuta(tegelane)}>Kustuta tegelane</button> 
<button onClick={()=> tyhjenda(tegelane)}>Tühjenda kõik</button> 
<button onClick={()=> lisaUusTegelane(tegelane)}>Lisa uus tegelane</button> 
    </div>)}
    </div> );
    }


export default Avaleht;