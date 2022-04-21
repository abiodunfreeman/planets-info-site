import React from 'react'
import "../css/main.css"
export default function Main(props) {
  const {data, planet} = props

 

  // if statement returns render according to window.innerWidth, only changes on refresh atm.
  if (window.innerWidth <= 450){
    
     return (
      <div id={planet.name} className="main">
        <div id="tabs">
          <h3 className='tab'>OVERVIEW</h3>
          <h3 className='tab'>STRUCTURE</h3>
          <h3 className='tab'>SURFACE</h3>
        </div>
      
        <div id="img--container">
          <img
          src={planet.images.planet}
          />
        </div>
        <div className="main--desc">
          <h1>{planet.name}</h1>
          <p>{planet.overview.content}</p>
          <p>Source: <a target="_blank" href={planet.overview.source}>Wikipedia</a></p>
        </div>
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
