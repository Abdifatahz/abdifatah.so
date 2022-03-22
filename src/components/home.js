import React,{useState} from "react";
import "../index.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Nav from "./Nav";


function App({toggleMenu,isBoxVisible}){

    return (
      <div className="w-full mx-auto max-w-6xl">
        <Nav  
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
