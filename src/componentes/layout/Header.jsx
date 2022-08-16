import React from 'react'
import logo from "../../assets/imgs/3wa.svg"
import "../../styles/header.css"
export default function header() {
  let nameSite='3W Academy'
  return (   
      <div className="App">
      <nav className="navbar">
        <div className="logo" >
          <img className="logob" src={logo} alt="Logo 3wa"/>
        </div>
        <div className='titre'>
          {nameSite}
        </div>
        <div className="liens" >
          <ul className='liste'>
            <li>Menu</li>
            <li>Technologies</li>
            <li>Entreprise</li>
            <li>Villes</li>
            <li>Accademy</li>
          </ul>
        </div>
        <div className="Button">
          <button>consulter</button>
        </div>
      </nav>
    </div>

  )
}
