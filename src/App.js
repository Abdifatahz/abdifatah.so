import React,{useState} from "react";
import { Router, Link } from "@reach/router";
import "./assets/main.css";
import Home from "./components/home";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  const [darkMode,setDarkMode]          = useState(true);
  const [isBoxVisible,setIsBoxVisible]  = useState(true);

  function toggleMenu (){
    setIsBoxVisible(!isBoxVisible);
  };

  function changeMode(){
    setDarkMode(!darkMode);
  };

  return (
    <div className="App bg-blue-100 h-64">
      <Router>
          <Home path="/" 
              darkMode={darkMode} 
              changeMode={changeMode}
              toggleMenu={toggleMenu}
              isBoxVisible={isBoxVisible} />
          <Resume path="/resume" mode={darkMode} />
          <Contact path="/contact" mode={darkMode} />
        </Router>

    </div>
  );
}

export default App;
