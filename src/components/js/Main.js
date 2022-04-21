import React from 'react'
import "../css/main.css"
export default function Main(props) {
  const {data, planet} = props
  let primaryColor;
  console.log(planet.name)
 
  if (window.innerWidth <= 450){
     return (
      <div id="main" className={planet.name}>
        <div id="tabs">
          <h3>OVERVIEW</h3>
          <h3>STRUCTURE</h3>
          <h3>SURFACE</h3>
        </div>
       <img
        src={planet.images.planet}
        />
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
