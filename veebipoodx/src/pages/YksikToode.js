import { useParams } from "react-router-dom";


function YksikToode() {
    const { j2rjekorraNumber } = useParams();
    const tootedLS = JSON.parse(localStorage.getItem("tooted")) || [];
const n2idatavToode = tootedLS[j2rjekorraNumber]; //   niii saab ka kui tahad näidata lehel, et TOODET EI LEITUD: ---> || "Toodet ei leitud";
console.log(n2idatavToode);

    return ( <div>

     { n2idatavToode !== undefined && 
     
     <div>
        <img src={n2idatavToode.pilt} alt="" />
        <div>{n2idatavToode.nimi}</div>
        <div>{n2idatavToode.hind} €</div>
        </div>}
     
     { n2idatavToode === undefined && <div>Valitud toodet ei leitud</div>}

     </div> );

}

export default YksikToode;