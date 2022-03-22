import React,{useState,useContext} from "react";
import { Router, Link } from "@reach/router";
import "./assets/main.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {ThemeContextProvider} from "./context/ThemeContextProvider";
import { TogglerContextProvider } from "./context/TogglerContextProvider";


function App() {
 
  return (
      <ThemeContextProvider>
        <TogglerContextProvider>
          <div className="App bg-blue-100 h-64">
              <Router>
                  <Home     path="/"  />
                  <Resume   path="/resume" />
                  <Contact  path="/contact" />
              </Router>
          </div>
        </TogglerContextProvider>
      </ThemeContextProvider>
  );
}

export default App;
