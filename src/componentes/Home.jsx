import React from 'react'
import cards from '../assets/imgs/card2.svg'
import icon from '../assets/imgs/icon.svg'
import image from '../assets/imgs/card3.svg'
import cert from '../assets/imgs/card4.svg'
import load from '../assets/imgs/card5.svg'
import pic from '../assets/imgs/card6.svg'
import Card from '../componentes/Card.jsx'
import '../styles/home.css'
export default function Home() {
  return (
    <div className='body'>
        <div>
            <div className='title'>
                <p><strong>Devenir développeur web et réaliser ses projets professionnels</strong></p>
                <h1>Des formations diplômantes faites par des experts plus que passionnés pour vous mener au succès professionnel.</h1>
            </div>
            <div className='firstBlock'>   
                
                    <Card img={cards} titttle={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"}/>
                    <Card img={icon} titttle={"Enseignées par des professionnels"} parag={"qui partagent plus qu'une passion !"}   />
                    <Card img={image} titttle={"Certifiées et reconnue"} parag={"par l'état, le secteur et les entreprises"} />
                    <Card img={cert} titttle={"Testez nos cours gratuitement"} parag={"depuis chez vous et dès maintenant"} />
                    <Card img={load} titttle={"Osez la reconversion professionnelle"} parag={"car l'ambition est le seul pré-requis"} />
                    <Card img={pic} titttle={"Spécialisez vous davantage"} parag={"avec des programmes pour tous niveaux"}  />
                         
            </div>
             
                {/* <div className='card'>
                    <img  src={cards} alt="#" />
                    <h4>1er bootcamp en France</h4>
                    <p>4500 alumni formés depuis 2012</p>
                </div>
                <div className='card'>
                    <img  src={icon} alt="#" />
                    <h4>Enseignées par des professionnels</h4>
                    <p>qui partagent plus qu'une passion !</p>
                </div>
                <div className='card'>
                    <img  src={image}/>
                    <h4>Certifiées et reconnues</h4>
                    <p>par l'état, le secteur et les entreprises</p>
                </div> */}
           
            
                {/* <div className='card'>
                    <img  src={cert}/>
                    <h4>Testez nos cours gratuitement</h4>
                    <p>depuis chez vous et dès maintenant !</p>
                </div>    
                <div className='card'>
                    <img  src={load}/>
                    <h4>Osez la reconversion professionnelle</h4>
                    <p>car l'ambition est le seul pré-requis</p>
                </div>
                <div className='card'>
                    <img  src={pic}/>
                    <h4>Spécialisez vous davantage</h4>
                    <p>avec des programmes pour tous niveaux</p>
                </div> */}
            
        </div>
    </div>

  )
}
