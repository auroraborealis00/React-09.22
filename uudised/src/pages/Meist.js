import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");

    return (<div className="meist">
        <div><strong>See on meist leht, nähtav localhost:3000/meist aadressil</strong></div>
        <img className="meist-pilt" src="https://media.itsnicethat.com/images/5b0fd04b7fa44c1c60001594.width-1440.format-jpeg_SnlvQEdcPpyJhpjV.jpg" alt="" />
        <div><strong>Meie töötajad:</strong></div>
        <br />
        <div><strong>Arvo Pärt</strong></div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => n2itaKontakt('+37257704460')}>Võta ühendust</button>
        <br /> <br/>
        <div><strong>Kelly Sildaru</strong></div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itaKontakt('+37257704460')}>Võta ühendust</button>
        <br /> <br/>
        <div><strong>Edward von Lõngus</strong></div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => n2itaKontakt('+37257704460')}>Võta ühendust</button>
        <br /> <br/>
        <div><strong>Kerli Kõiv</strong></div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => n2itaKontakt('+37257704460')}>Võta ühendust</button>
        <br /> <br/>
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}

        </div> );
}

export default Meist;