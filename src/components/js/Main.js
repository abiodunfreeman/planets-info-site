import React, { useState } from 'react'
import "../css/main.css"
import "../css/mobile.css"
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
   const handleTabClick = ( id) => {
     let setPicId;
     switch(id){
       case "m-1":
         setPicId = "1";
         break;
       case "m-2":
        setPicId = "2";
        break;
      case "m-3":
        setPicId = "3";
        break;
      case "3":
        setPicId = "3";
        break;
      case "2":
          setPicId = "2";
          break;
      case "1":
        setPicId = "1";
        break;
     }
     const currTab = document.getElementById(id); // selects current tab
     const tabs = [...document.querySelectorAll(".tab")];
     tabs.forEach(x => {
      x.classList.remove("active");
      x.classList.add("not-active");
     }) 
     const mobileTabs = [...document.querySelectorAll(".mobile-tab")]
     mobileTabs.forEach(x => {
      x.classList.remove("active");
      x.classList.add("not-active");
     })
     currTab.classList.remove("not-active");
     currTab.classList.add("active"); // removes .active from all tabs first, then adds .active to selected tab
     setDisplay(setPicId) // setsDisplay to new tab, thus rerendering and updating the page with proper info

   }
 
    return (
      <div id="main-wrapper">
        <div id="mobile-tabs">
                <h3 className='mobile-tab' id="m-1" onClick={() => handleTabClick("m-1")}> OVERVIEW</h3>
                <h3 className='mobile-tab' id="m-2" onClick={() => handleTabClick("m-2")}> STRUCTURE</h3>
                <h3 className='mobile-tab' id="m-3" onClick={() => handleTabClick("m-3")}> SURFACE </h3>
              </div>
        <div id={planet.name} className="main">
           
          <div id="main--container">
            <div id="img--container">
              <img
                id='main-img'
                src={imgSrc}
              />
              {display === "3" && <div className = "img-wrapper" ><img id="secondary-img" src={planet.images.geology}/></div>}
            </div>
            <div id="main--desc">
              <div id="name--container">
                <h1>{planet.name.toUpperCase()}</h1>
                <p id="first-p">{desc}</p>
                <p><span className="lower-opacity">Source:</span> <a id="wiki-link" target="_blank" href={planet.overview.source}>Wikipedia</a></p>
              </div>
              <div id="tabs">
                <h3 className='tab' id="1" onClick={() => handleTabClick("1")}><span className="lower-opacity">01</span> OVERVIEW</h3>
                <h3 className='tab' id="2" onClick={() => handleTabClick("2")}><span className="lower-opacity">02</span> INTERNAL STRUCTURE</h3>
                <h3 className='tab' id="3" onClick={() => handleTabClick("3")}><span className="lower-opacity">03</span> SURFACE GEOLOGY</h3>
              </div>
            </div>
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
   </div>
    )
}
