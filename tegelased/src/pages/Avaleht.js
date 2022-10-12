import { useState } from "react";
import { useRef } from "react";

function Avaleht () {
const tegelasedRef = useRef();
    const[tegelased, n2itaTegelased] = useState([{
    "nimi": "Mickey",
    "perekonnanimi": "Mouse",
    "vanus": "4",
    "elukoht": "Disneyland"
},
{
    "nimi": "Minnie", 
    "perekonnanimi": "Mouse", 
    "vanus": "4",
    "elukoht": "Disneyland"
},
{
     "nimi": "Winnie",
     "perekonnanimi": "Pooh",
     "vanus": "3",
     "elukoht": "Hundred Acre Wood"
},
{
    "nimi": "Roo",
    "perekonnanimi": "Kangaroo",
    "vanus" : "2",
    "elukoht": "Hundred Acre Wood"
},
{
    "nimi": "Scoobie",
    "perekonnanimi": "Doo", 
    "vanus": "1",
    "elukoht": "Crystal Cove"
}

])

const kuvaNimi = (tegelane)=> {
    console.log (tegelane.nimi);
    n2itaTegelased(tegelased);
}
function kustuta (tegelane)  {
    tegelased.splice (tegelane, 1);
    n2itaTegelased(tegelased.slice());
}
const tyhjenda = () =>{
    n2itaTegelased ([]);
}
function lisaUusTegelane (){
    tegelased.push(tegelasedRef.current.value);
    n2itaTegelased(tegelased.slice());
}

    return ( <div>
        <div> Tegelasi on {tegelased.length} tk</div>


 {tegelased.map((tegelane, index) =>
<div key={index}>
   
<div>{tegelane.nimi}</div>
    <div>{tegelane.perekonnanimi}</div>
    <div>{tegelane.vanus}</div>
    <div>{tegelane.elukoht}</div>
<input ref={tegelasedRef} type="text" />
<button onClick={()=> kuvaNimi(index)}>Klikkisid tegelase peal</button> <br />
<button onClick={()=> kustuta(index)}>Kustuta tegelane</button> <br />
<button onClick={()=> tyhjenda(index)}>Tühjenda kõik</button> <br />
<button onClick={()=> lisaUusTegelane(index)}>Lisa uus tegelane</button> <br /> 
    </div>)}
    </div> );
    }


export default Avaleht;