import "./App.css";
import React from "react";
import Colors from "./components/Colors";
import NavBar from "./components/NavBar";
import Pallettes from "./components/Pallettes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Colors />
    </div>
  );
}

export default App;
