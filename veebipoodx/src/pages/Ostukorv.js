import { useState } from "react";

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) ||[]);
// useState() <---sulgude sees panen esialgse väärtuse mida lehel näen (pärast refreshi või lehele tulles)
// [] <--- tähistavad et alguses on väärtuseks array ["cats", "dogs", "chicken", "cowas"]
// useState ([])


    const kustuta = (index) => {
     ostukorv.splice(index,1);
    uuendaOstukorv(ostukorv.slice());
    // uuendaOstukorv () // <---SULGUDE SEES PANEN UUE VÄÄRTUSE MIDA LEHEL NÄEN
    // SULUD TÄHISTAVAD, ET SEE FUNKTSIOOM PANNAKSE KÄIMA
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));

    }
    const tyhjenda = () => {
        uuendaOstukorv ([]);
        localStorage.setItem("ostukorv", JSON.stringify([]));
    }

    return ( <div>
        { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div> }
        { ostukorv.length === 0 && <div>Ostukorv on tühi</div> }
       { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
        { ostukorv.map((element,index) =>
             <div key={index}>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>x</button>
             </div>)}
    </div> );
}

export default Ostukorv;