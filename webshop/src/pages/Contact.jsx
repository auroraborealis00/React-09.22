import { useState } from 'react';
import Map from '../components/Maps';
import { useRef } from 'react';

function Contact() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
const nameRef = useRef();
const emailRef = useRef();
const messageRef = useRef();



const sendEmail = () => {

}
  return (<div>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [59.4414, 24.7357], zoom: 13})}>Balti jaam</button>
    <Map mapCoordinaates={coordinaates}  />


    <label>Anna meile tagasisidet!</label> <br />
    <label>Nimi</label> <br />
    <input ref={nameRef} type="text" placeholder="Sinu nimi"/> <br />
    <label>E-mail</label> <br />
    <input ref={emailRef} type="text" placeholder="Sinu e-mail" /> <br />
    <label>Tagasiside</label> <br />
    <input ref={messageRef} type="text" placeholder="Sinu tagasiside" /> <br />
    <button onClick={sendEmail}>Saada</button> <br />
   
  </div>)
}

export default Contact;