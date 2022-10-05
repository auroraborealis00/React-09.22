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
const arvutaOstukorviKogusumma = () => {
    let kogusumma = 0;
    ostukorv.forEach(element => kogusumma = kogusumma + element.hind );
    return kogusumma.toFixed(2);

}
    return ( <div>
        { ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div> }
        { ostukorv.length === 0 && <div>Ostukorv on tühi</div> }
       { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
        { ostukorv.map((element,index) =>
             <div key={index}>
                <img src={element.pilt} alt="" />
                <div>{element.nimi}</div>
                <div>{element.hind}</div>
                <button onClick={() => kustuta(index)}>x</button>
             </div>)}
             <div>Kokku: {arvutaOstukorviKogusumma()} €</div>
    </div> );
}

export default Ostukorv;