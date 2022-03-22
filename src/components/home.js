import React,{useState} from "react";
import "../index.css";
import Main from "./main";
import Sidebar from "./sidebar";
import Nav from "./Nav";


function App({darkMode,toggleMenu,isBoxVisible,changeMode}){

    return (
      <div className="w-full mx-auto max-w-6xl">
        <Nav  
              darkMode={darkMode} 
              changeMode={changeMode}
              toggleMenu={toggleMenu}
              isBoxVisible={isBoxVisible}
         />
        <section className="w-full  mx-auto flex flex-col sm:flex-row">
          <Main />
          <Sidebar />
        </section>
    
      </div>
    );
}

export default App;
