import React from "react";
import "./assets/main.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import {ThemeContextProvider} from "./context/ThemeContextProvider";
import { TogglerContextProvider } from "./context/TogglerContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
 
  return (
      <ThemeContextProvider>
        <TogglerContextProvider>
          <div className="App bg-blue-100 h-64">
              <BrowserRouter>
                <Routes>
                    <Route  path="/"        element={<Home/>} />
                    <Route  path="/resume"  element={<Resume/>} />
                    <Route  path="/contact" element={<Contact/>} />
                </Routes>
              </BrowserRouter>
          </div>
        </TogglerContextProvider>
      </ThemeContextProvider>
  );
}

export default App;
