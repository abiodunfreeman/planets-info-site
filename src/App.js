import './App.css';
import Header from './components/js/Header';
import data from "./data.json"
function App() {
  
  return (
    <div className="App">
      <Header data={data}/>
    </div>
  );
}

export default App;
