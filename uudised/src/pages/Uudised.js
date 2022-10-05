import { Link } from "react-router-dom";

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    return ( 
    <div className="uudised">
        
        <div><strong>See on uudiste leht, nähtav localhost:3000/uudised</strong></div>
        <img className="uudiste-pilt" src="https://auto.geenius.ee/app/uploads/sites/4/2018/06/83a2691537a9b5d8010e6979774bf234-770x433.png" alt="" />
        
        {uudised.length === 0 && <div>Ühtegi uudist hetkel pole! Lisame õige pea.</div>}
        <div>{uudised.map((uudis, index) => 
        <Link to={"/uudis/" + index}>
            <div>{uudis}</div>
            </Link>
            )}</div>
           
        </div> );
}

export default Uudised;