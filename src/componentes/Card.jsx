import React from "react";
import '../styles/card.css'
import'../styles/home.css'
import cardImg from '../assets/imgs/card2.svg'
export default function (props) {
  return (
    
    
        <div className="card">
          <img src={props.img} alt="#"/>
          <h4>{props.titttle}</h4>
          <p>{props.parag}</p>
    
      </div>

  );
}
