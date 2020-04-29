import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/navigation/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
