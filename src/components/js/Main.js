import React, { useState } from 'react'
import "../css/main.css"
import "../css/planet-fact-list.css"
export default function Main(props) {

  const {data, planet} = props
  const [display, setDisplay] = useState("1")
 
  let desc;
  let imgSrc;
  if (display === "1"){
    desc = planet.overview.content
    imgSrc = planet.images.planet
  } else if (display === "2"){
    desc = planet.structure.content
    imgSrc = planet.images.internal
  } else if (display === "3" ){
    desc = planet.geology.content
    imgSrc = planet.images.planet
  }

  // if statement returns render according to window.innerWidth, only changes on refresh atm.
  if (window.innerWidth <= 450){
    
     return (
      <div id={planet.name} className="main">
        <div id="tabs">
          <h3 className='tab' id="1" onClick={() => setDisplay("1")}>OVERVIEW</h3>
          <h3 className='tab' id="2" onClick={() => setDisplay("2")}>STRUCTURE</h3>
          <h3 className='tab' id="3" onClick={() => setDisplay("3")}>SURFACE</h3>
        </div>
      
        <div id="img--container">
          <img
          id='main-img'
          src={imgSrc}
          />
          {display === "3" && <img id="secondary-img" src={planet.images.geology}/>}
        </div>
        <div className="main--desc">
          <h1>{planet.name}</h1>
          <p>{desc}</p>
          <p>Source: <a target="_blank" href={planet.overview.source}>Wikipedia</a></p>
        </div>
        <ul id="planet-facts-list">
          <li>
            <h4>Rotation Time</h4>
            
            <h3>{planet.rotation}</h3>
          </li>
          <li>
            <h4>Revolution Time </h4>
            <h3>{planet.revolution}</h3>
          </li>
          <li>
            <h4>Radius</h4>
            <h3>{planet.radius}</h3>
            </li>
          <li>
            <h4>Average Temp.</h4>
            <h3>{planet.temperature}</h3>
            </li>
        </ul>
      </div>
    )
  } else if (window.innerWidth <= 800){
    return (
      <div id="main">
        tablet
      </div>
    )
  } else {
    return (
      <div id="main">
        Desktop
        </div>
    )
  }
}
