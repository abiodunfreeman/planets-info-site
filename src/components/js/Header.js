/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import '../css/header.css';

export default function Header( props ) {
  const {data, handleChange} = props;
  const planetNames = data.map(planet => {
    //maps planet names into li elements, with an onClick method calling listItemClick
    return <li key={planet.name} onClick={() => listItemClick(planet.name)}>
      <h4>{planet.name}</h4>
    </li>
  })
 
  const logo = "./assets/icon-hamburger.svg"
  const [showList, setShowList] = useState(false);
  const handleShowList = () => {
    setShowList(prevState => !prevState);
  }
  function listItemClick(planetName){
    // changes the curPlanet state and hides the planetNames list 
    handleChange(planetName) // function passed through props from <App/> 
    window.innerWidth < 500 && handleShowList(); // hides list after user clicks on a planet
  }
  return (
    <header id="main-nav">
       <h1>The Planets</h1>

      <ul id="planet-list">
        {planetNames}
      </ul> 

      <img id="hmgIcon" src={logo} onClick={() => handleShowList()}/>
      

      {showList && <ul id="mobile-planet-list">{planetNames}</ul>}
    </header>
  );
}
