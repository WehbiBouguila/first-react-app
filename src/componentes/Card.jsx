import React from "react";
import '../styles/card.css'
import'../styles/home.css'
import cardImg from '../assets/imgs/card2.svg'
export default function () {
  return (
    
    
        <div className="card">
          <img src={cardImg} alt="#"/>
          <h4>1er bootcamp en France</h4>
          <p>4500 alumni formés depuis 2012</p>
    
      </div>

  );
}
