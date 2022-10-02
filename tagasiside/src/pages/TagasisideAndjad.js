import { useState } from "react";
import andjateFail from "../nimed.json";

function TagasideAndjad () {
    const [andjad, uuendaAndjad] = useState(andjateFail)
    const [paul, uuendaPaul] = useState();
    const[firstD, uuendaFirstD] = useState();

    

    const filtreeriM = () => {
        const vastus = andjad.filter(element =>
            element.startsWith ('M'));
            uuendaAndjad(vastus);
    }


    const filterEndingY= () => {
        const vastus = andjad.filter(element =>
        element.endsWith ('y'));
        uuendaAndjad(vastus);
    }

    const filterSixLetters = () => {
        const vastus = andjad.filter(element =>
        element.length === 6);
        uuendaAndjad(vastus);
    }

    const sortZA = () => {
        andjad.sort(); //andjad.sort().reverse
        uuendaAndjad(andjad.slice());

    }
    const insertEST = () => {
        const vastus = andjad.map(element => "EST-" + element);
        uuendaAndjad(vastus);
    }

    const findPaulIndex = () => {
        const index = andjad.indexOf ("Paul");
        console.log(index);
        uuendaPaul(index);
        
    }
const leiaEsimeneDTahega = () => {
    const vastus = andjad.find(element => element.startsWith("D"));
    uuendaFirstD(vastus);
    console.log(vastus);

}
    return ( <div>
        <div>Pauli järjekorranumber: {paul}</div>
        <div>Esimene D tähega algav nimi: {firstD}</div>
        <div> TagasisideAndjaid on {andjad.length} tk</div>
<button onClick={() =>filtreeriM()}>Filtreeri ehk jäta kõik M tähega algavad nimed alles</button>
<button onClick={() =>filterSixLetters()}>Filtreeri ehk jäta kõik täpselt 6 kohalised nimed alles</button>
<button onClick={() =>filterEndingY()}>Filtreeri ehk jäta kõik Y tähega lõppevad nimed alles</button>
<button onClick={() =>sortZA()}>Sorteeri Z-A</button>
<button onClick={() =>insertEST()}>Muuda kõiki "EST-"</button>
<button onClick={() =>findPaulIndex()}>Leia üles mis on nime "Paul" järjekorranumber - console.log või kuva HTMLs eraldi muutuja</button>
<button onClick={() =>leiaEsimeneDTahega()}>Kuva tähestikus esimene, kellel on D tähega algav nimi .find abil - console.log</button>
{andjad.map(element => <div key={element}>{element}</div>)}
    </div>);
}

export default TagasideAndjad ;