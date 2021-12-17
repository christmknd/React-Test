import './App.css';
import Bonjour from "./components/Bonjour";
import Horloge from "./components/Horloge";

function App() {
  return (
    <div className="App">
      <Bonjour name={"Christ"}/>
      <Horloge/>
    </div>
  );
}

export default App;
