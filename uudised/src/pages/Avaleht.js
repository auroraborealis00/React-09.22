import { useEffect, useState } from "react";

function Avaleht() {
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => uuendaPostitused(data))

    }, []);

    return (<div className="avaleht">
        
        <div><strong>See on avaleht, nähtav localhost:3000 aadressil</strong></div>
        
        <img className="avaleht-pilt" src="https://themusic-originals.sgp1.digitaloceanspaces.com/standard/purplesneakers/2018/05/Screen-Shot-2018-05-31-at-5.17.46-PM.png" alt="" />
        { postitused.map(element => 
        <div>
        <div><i>{element.userId}</i></div>
        <div><u>{element.id}</u></div>
        <div><b>{element.title}</b></div>
        <div>{element.body}</div>
        </div>
        ) }
        </div> );
}

export default Avaleht;