import './App.css';
import React from "react";
import Bonjour from "./components/Bonjour";
import Countries from "./components/Countries";

function App() {

    return (
    <div className="App">
      <Bonjour name={"Christ"}/>
      <Countries/>
    </div>
  );
}

export default App;
