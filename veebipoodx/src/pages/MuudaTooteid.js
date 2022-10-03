import { useRef } from "react";
import { useParams } from "react-router-dom";

// import {Link, Route, Routes, useParams} from "react-router-dom"; navigeerimisega seotud
//  import {useState, useRef} from "react"; <--- HTMLi muutmised

function MuudaTooteid() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode =tooted[index];

  // const muutujaKuhuVõetavToodeLäheb = ["chicken", "cats", "dogs"] [0];
  // console.log(muutujaKuhuVõetavToodeLäheb) expected output: "chicken"
  const nimiRef = useRef();


  const uuendaToode = () => {
    // ["chicken", "cats", "dogs"] [0] = "bison";
    // console.log() --> ["bison", "cats", "dogs"]
    tooted[index] = nimiRef.current.value;
    localStorage.setItem("tooted", JSON.stringify(tooted));

  }

    return ( <div>
       
       <label>Toote nimi</label> <br />
       <input ref={nimiRef} type="text"  defaultValue={leitudToode} /> <br />
       <button onClick={uuendaToode}>Muuda toode</button>
       </div> );
     
}

export default MuudaTooteid;