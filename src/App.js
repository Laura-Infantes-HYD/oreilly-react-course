import { useState } from "react";
import "./App.css";
import Header from "./components/organisms/Header";
import PLP from "./pages/PLP";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <PLP></PLP>
    </div>
  );
}

export default App;
