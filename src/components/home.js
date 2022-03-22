import React,{useState,useContext} from "react";
import Nav from "./Nav";
import { ThemeContext } from '../context/ThemeContextProvider';
import Profile from "../assets/img/profile.jpg";
import ProjectHeading from './ProjectHeading'
import LanguageHeading from './LanguageHeading'


function App(){
  
  const {darkMode,changeMode} = useContext(ThemeContext);

    return (
      <div className="min-h-screen bg-gray-100">
        <Nav />
        <section className="w-full  mx-auto flex flex-col sm:flex-row">
          <section
            className={`md:w-2/3  p-8 text-right ${
              darkMode === 'dark' ? "bg-gray-900" : "bg-indigo-800"
            }`}
            >
            <h4 className="text-orange-400 text-4xl">Abdifatah Abdilahi</h4>
            <p className="text-gray-200">I'm a Fullstack Enginner in Mogadishu</p>
            <p className="text-2xl text-gray-200 leading-relaxed text-left">
              {" "}
              I am a full-stack PHP developer.I spend my days designing and
              developing web applications, and teaching on Somcoders. I specialize
              in the Laravel PHP framework on the backend, React.js on the
              frontend ,Bootstrap and Tailwind CSS for styling. Currently I work
              full time as a Laravel developer, building internal apps and tools
              for my employer.
            </p>
            <div className="my-5">
              <div className="w-full text-orange-500 font-bold text-3xl text-center d-block">
                Side projects
              </div>

              <div className="flex flex-col  justify-around sm:flex-row">
                <ProjectHeading bg="bg-orange-600">LMS</ProjectHeading>
                <ProjectHeading bg="bg-yellow-600">Human Resource</ProjectHeading>
                <ProjectHeading bg="bg-gray-600">Online Exmination</ProjectHeading>
      
              </div>
              <div className="flex flex-col  justify-around sm:flex-row">
                <ProjectHeading bg="bg-red-600">Somcoders.com</ProjectHeading>
                <ProjectHeading bg="bg-blue-600">Somcoders Android</ProjectHeading>
                <ProjectHeading bg="bg-green-600">School Management</ProjectHeading>
              </div>
            </div>
          </section>
          <aside
          className={`md:w-1/3  flex flex-col justify-center items-center ${
            darkMode === "dark"
              ? "bg-gray-900 border-l-2 border-gray-600"
              : "bg-gray-200"
          }`}
          >
          <img
            className="rounded-full border-8 my-4 w-64 h-64 border-indigo-500"
            src={Profile}
          />

          <div className="my-5 w-full">
            <div
              className={`w-full  font-bold text-3xl text-center d-block ${
                darkMode === "dark" ? "text-orange-500" : "text-indigo-500"
              }`}
            >
              Professional
            </div>
            <div className="flex flex-col justify-around flex-start"> 
              <LanguageHeading darkMode={darkMode}>Laravel</LanguageHeading>
              <LanguageHeading darkMode={darkMode}>React</LanguageHeading>
              <LanguageHeading darkMode={darkMode}>TailwindCSS</LanguageHeading>
            </div>
          </div>
          </aside>
        </section>
    
      </div>
    );
}

export default App;
