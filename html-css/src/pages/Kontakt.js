import{ useState } from "react";


function Kontakt () {
const [aadress, määraAadress] =useState("Tallinn");
const [telefon, määraTelefon] =useState("57704460");
const [email,määraEmail] =useState("bla@baa.com");
const [ingliseKeelne, määraIngliseKeelne] = useState("ei");

const ingliseks= () => {
    määraAadress ("London");
    määraTelefon ("12300000000");
    määraEmail ("london@london.com");
    määraIngliseKeelne ("jah");
}
return ( <div>
<div>{ aadress }</div>
<div>{ telefon }</div>
<div>{ email }</div>
<button onClick={ingliseks}>Muuda inglise keelseks</button>
{ ingliseKeelne === "jah" && <div> Leht on inglise keelne</div>}
</div>
 );
}

export default Kontakt ;