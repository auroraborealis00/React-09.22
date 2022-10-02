import { useParams } from "react-router-dom";


function MuudaTooteid() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode =tooted[index];

    return ( <div>MT: {index} - {leitudToode} </div> );
     
}

export default MuudaTooteid;