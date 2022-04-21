/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../css/header.css';

export default function Header( props ) {
  const {data} = props;
  const planetNames = data.map(planet => {
    return <li>
      {planet.name}
    </li>
  })
  console.log(data)
  return (
    <header id="main-nav">
      
      <h1>The Planets</h1>
      <ul>
        {planetNames}
      </ul>
    </header>
  );
}
