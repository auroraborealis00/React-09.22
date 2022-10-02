import { useState } from "react";


function Seaded() {
const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

function muudaLehtTume (color){
muudaKujundus("dark_mode");
localStorage.setItem("veebilehe_kujundus", "dark_mode")
document.body.style.backround = color;
}

const muudaLehtHele = () => {
muudaKujundus("light_mode");
localStorage.setItem("veebilehe_kujundus", "light_mode");
}

return (
<body>
<div>
   
<button onClick={muudaLehtTume}>dark</button>
<button onClick={muudaLehtHele}>light</button>
{ kujundus==="dark_mode" && <div>TUME LEHT</div> }
{ kujundus==="light_mode" && <div>HELE LEHT</div> } 
</div> 
</body>
);
}

export default Seaded;