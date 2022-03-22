import React,{useState,useContext} from "react";
import { Router, Link } from "@reach/router";
import "./assets/main.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {ThemeContextProvider} from "./context/ThemeContextProvider";


function App() {
  const [isBoxVisible,setIsBoxVisible]  = useState(true);
  function toggleMenu (){
    setIsBoxVisible(!isBoxVisible);
  };


  return (
      <ThemeContextProvider>
        <div className="App bg-blue-100 h-64">
            <Router>
                <Home path="/" 
                    toggleMenu={toggleMenu}
                    isBoxVisible={isBoxVisible} />
                <Resume path="/resume" />
                <Contact path="/contact" />
            </Router>
        </div>
      </ThemeContextProvider>
  );
}

export default App;
