import { useState } from "react";

function Kontaktid() {
    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudan2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudan2itaTelTasku] = useState(false);

    return ( <div className="kontakt">
        <div><strong>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</strong></div>
        <img className="kontaktide-pilt" src="https://crackmagazine.net/wp-content/uploads/2018/11/Tommy-Cash-Gallery-1.jpg" alt="" />
        <div><strong>Võta meiega ühendust:</strong></div>
        <br />
        <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}><strong>Kristiine keskus</strong></div>
        {n2itaTelKristiine && <div>+37257704460</div>}
        <div>Endla 45</div>
        <br />
        <div onClick={() => muudan2itaTelYlemiste(!n2itaTelYlemiste)}><strong>Ülemiste keskus</strong></div>
        {n2itaTelYlemiste && <div>+37257704460</div>}
        <div>Suur-Sõjamäe 4</div>
        <br />
        <div onClick={() => muudan2itaTelTasku(!n2itaTelTasku)}><strong>Tasku keskus</strong></div>
        {n2itaTelTasku && <div>+37257704460</div>}
        <div>Turu 2</div>
        </div> );
}

export default Kontaktid;