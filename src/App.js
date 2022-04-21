import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Main from './components/js/Main';
import data from "./data.json"
function App() {
  const [curPlanet, setCurPlanet] = useState(data[0])
  const handlePlanetChange = (name) => {
   const cur = data.filter(planet => {
     return name === planet.name
   })
   setCurPlanet(cur[0])
   
  }
  useEffect(() => {
    // console.log(curPlanet)
  }, [curPlanet])
  return (
    <div className="App">
      <Header data={data} handleChange={handlePlanetChange}/>
      <Main data={data} planet={curPlanet}/>
    </div>
  );
}

export default App;
