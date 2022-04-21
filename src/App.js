import './App.css';
import Header from './components/js/Header';
import Main from './components/js/Main';
import data from "./data.json"
function App() {
  
  return (
    <div className="App">
      <Header data={data}/>
      <Main data={data}/>
    </div>
  );
}

export default App;
