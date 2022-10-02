




import { useState } from "react";
// apiKey: "AIzaSyBLRl3Odac7jaAmTj9zsGKuiHRpUq9N50Y"
// backspace - panen vasakule
function Avaleht() {
    // vasak pool läheb HTMLI (teha muutuv koht)
    // paremal pool on funktsionaalsus, mille abil saan vaskut poolt muuta
    // kui toimub muutmine, siis antakse läbi parema poole sulgude uus väärtus
    // useState sulgude sees on esmane väärtus lehele tulles
    // pärast refreshi või lehelt (URL-lt) ära minnnes ja tagasi tulles
    // const[kogus, uuendaKogus] = useState(6),
    // const - constant variable ehk konstatne muutuja
    // let - local variable in entire function
    // me kasutame UseState ainult sp, et ta teeks restarti lehele automaatselt
const [kogus, uuendaKogus] = useState(6);
const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

const nulli = () => {
    uuendaKogus(0);
}

const v2henda = () => {
    if (kogus > 0) {
    uuendaKogus(kogus - 1);
    console.log(kogus);
    }
}

const suurenda = () => {
    uuendaKogus(kogus + 1);
    console.log(kogus);
}

const lisaOstukorvi = (klikitudToode) => {
    // "[{"productId:": 512, "quantity" :1}]
    let ostukorvLS = localStorage.getItem("ostukorv") 
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);

}



return ( 
    <div>
    { kogus > 0 && <button onClick={nulli} >Nulli tagasi</button> }
    <br />
    <button onClick={v2henda} >-</button>
    <span> {kogus} </span>
    <button onClick={suurenda}>+</button>

{tooted.map(element =>
     <div key={element}>
       <div>{element}</div> 
       <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
       </div>)}

    </div> );
}

export default Avaleht;





// br <- ühe vaherea   <br/>
// p <- paragraph      <p>3123</p>


// src\pages\Avaleht.js       <-- Avaleht.js failis
//   Line 7:32:  'useState' is not defined  no-undef    <--- rida 7, vasakult paremale minnes 32
// useState on tundmatu (mitte defineeritud) ehk on jäänud importimata

// Line 10:10:  'kogus' is assigned a value but never used  <--- ma olen loonud sellise dünaamika võimaluse nagu
        // "kogus", aga ma ei ole seda kordagi kasutusele võtnud (miks ma siis tegin selle?)
// Line 10:17:  'uuendaKogus' is assigned a value but never used