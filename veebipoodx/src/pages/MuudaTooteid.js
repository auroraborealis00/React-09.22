import { useRef } from "react";
import { useParams } from "react-router-dom";

// import {Link, Route, Routes, useParams} from "react-router-dom"; navigeerimisega seotud
//  import {useState, useRef} from "react"; <--- HTMLi muutmised

function MuudaTooteid() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index];

  // const muutujaKuhuVõetavToodeLäheb = ["chicken", "cats", "dogs"] [0];
  // console.log(muutujaKuhuVõetavToodeLäheb) expected output: "chicken"
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();


  const uuendaToode = () => {
    // ["chicken", "cats", "dogs"] [0] = "bison";
    // console.log() --> ["bison", "cats", "dogs"]
    tooted[index] = {
    "nimi": nimiRef.current.value,
    "hind": Number (hindRef.current.value),
    "pilt": piltRef.current.value
  };
    localStorage.setItem("tooted", JSON.stringify(tooted));

  }

    return ( <div>
       
       <label>Toote nimi</label> <br />
       <input ref={nimiRef} type="text"  defaultValue={leitudToode.nimi} /> <br />
       <label>Toote hind</label> <br />
       <input ref={hindRef} type="number"  defaultValue={leitudToode.hind} /> <br />
       <label>Toote pilt</label> <br />
       <input ref={hindRef} type="text"  defaultValue={leitudToode.hind} /> <br />
       <button onClick={uuendaToode}>Muuda toode</button>
       </div> );
     
}

export default MuudaTooteid;