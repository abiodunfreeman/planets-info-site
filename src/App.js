import { useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Main from './components/js/Main';
import data from "./data.json"
function App() {
  const [curPlanet, setCurPlanet] = useState(data[0])
  return (
    <div className="App">
      <Header data={data}/>
      <Main data={data} planet={curPlanet}/>
    </div>
  );
}

export default App;
