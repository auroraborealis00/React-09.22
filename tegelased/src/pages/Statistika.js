import {useRef, useState} from "react";


function Statistika() {
    const[statistika, uuendaStatistika] = useState (["shoes", "shirts", "socks", "sweaters", "pigs", "goats", "sheep", "spray", "limit", "elite", "exuberant", "destruction", "present", "March", "Jan", "Feb", "Dec"])
const statistikaRef =useRef();


function kustuta(index) {
statistika.splice(index, 1);
    uuendaStatistika(statistika.slice());
}

function LisaUusElement(){
    statistika.push(statistikaRef.current.value);
    uuendaStatistika(statistika.slice());
}
const tyhjenda = () => {
    uuendaStatistika([]);

}
const sorteeri = () => {
    statistika.sort();
    uuendaStatistika(statistika.slice());
}

const muudaK6iki = () => {
    const vastus =statistika.map(element => element.charAt(4) + element);
    uuendaStatistika(vastus); 
}
    return ( <div>
        <div> Elemente on {statistika.length} tk</div>
    <div>Statistika: {statistika.map((element, index)=>
<div>

    <span>{element}</span>
    <button onClick={() => kustuta(index)}>x</button>
</div>)}
       
        <button onClick={() => uuendaStatistika}></button>
      <br />
      <label>Lisa uus element:</label>
      <input ref={statistikaRef} type= "text" />
      <button onClick={() => LisaUusElement()}>Sisesta</button>
      <button onClick={tyhjenda}>Tühjenda</button>
      <button onClick={sorteeri}>Sorteeri A-Z</button>
      <button onClick={muudaK6iki}>Muuda kõiki</button>
        </div>
        </div>
     );
}

export default Statistika ;