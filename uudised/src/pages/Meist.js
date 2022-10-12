import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
    const tootajad = [ 
{nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
{nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+313124123"},
{nimi: "Edward von Lõngus", ala: "Uudiste kujundamine", telefon: "+312312312"},
{nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+37257704460"},
{nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
{nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+313124123"},
{nimi: "Edward von Lõngus", ala: "Uudiste kujundamine", telefon: "+312312312"},
{nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+37257704460"}
    ]

    return (<div className="meist">
        <div><strong>See on meist leht, nähtav localhost:3000/meist aadressil</strong></div>
        <img className="meist-pilt" src="https://media.itsnicethat.com/images/5b0fd04b7fa44c1c60001594.width-1440.format-jpeg_SnlvQEdcPpyJhpjV.jpg" alt="" />
        <div><strong>Meie töötajad:</strong></div>
        <br />
        <div>{tootajad.map(tootaja =>
        <div>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={() => n2itaKontakt(tootaja.telefon)}>Võta ühendust</button>
            <br /><br />
            </div>)}
            </div>

        {/* <div><strong>Arvo Pärt</strong></div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => n2itaKontakt('31312312')}>Võta ühendust</button>
        <br /> <br/>
        <div><strong>Kelly Sildaru</strong></div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itaKontakt('313124123')}>Võta ühendust</button>
        <br /> <br/>
        <div><strong>Edward von Lõngus</strong></div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => n2itaKontakt('+312312312')}>Võta ühendust</button>
        <br /> <br/>
        <div><strong>Kerli Kõiv</strong></div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => n2itaKontakt('+37257704460')}>Võta ühendust</button>
<br /> <br/> */}
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}

        </div> );
}

export default Meist;