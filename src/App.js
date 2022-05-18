import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Main from './components/js/Main';
import data from "./data.json"
function App() {
  const [curPlanet, setCurPlanet] = useState(data[0]) 
  const handlePlanetChange = (name) => {
    // filters data.JSON for a name that equals the variable passed through and sets the curPlanet to the result
   const cur = data.filter(planet => {
     return name === planet.name
   })
   setCurPlanet(cur[0])
   
  }
  
  return (
    <div className="App">
      
      <Header data={data} handleChange={handlePlanetChange}/>
      <Main data={data} planet={curPlanet}/>
    </div>
  );
}

export default App;
