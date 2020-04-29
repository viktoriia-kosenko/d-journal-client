import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/navigation/Navbar";
import "./App.css";

export const UserContext = React.createContext();

const user = {
  isLoggedIn: false,
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={user}>
          <Navbar />
          <Routes />
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
