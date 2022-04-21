/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import '../css/header.css';

export default function Header( props ) {
  const {data, handleChange} = props;
  const planetNames = data.map(planet => {
    return <li key={planet.name} onClick={() => handleChange(planet.name)}>
      {planet.name}
    </li>
  })
  const logo = "./assets/icon-hamburger.svg"
  const [showList, setShowList] = useState(false);
  const handleShowList = () => {
    setShowList(prevState => !prevState);
  }
 
  return (
    <header id="main-nav">
      
      <h1>The Planets</h1>
     {window.innerWidth > 450 ?  <ul>
        {planetNames}
      </ul> :
      <img src={logo} onClick={() => handleShowList()}/>
      }
      {showList && <ul>{planetNames}</ul>}
    </header>
  );
}
