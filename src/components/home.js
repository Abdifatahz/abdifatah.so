import React,{useState,useContext} from "react";
import "../index.css";
import Nav from "./Nav";
import { ThemeContext } from '../context/ThemeContextProvider';
import Profile from "../assets/img/profile.jpg";


function App({toggleMenu,isBoxVisible}){
  
  const {darkMode,changeMode} = useContext(ThemeContext);

    return (
      <div className="w-full mx-auto max-w-6xl">
        <Nav  
              toggleMenu={toggleMenu}
              isBoxVisible={isBoxVisible}
         />
        <section className="w-full  mx-auto flex flex-col sm:flex-row">
          <section
            className={`md:w-2/3  p-8 text-right ${
              darkMode ? "bg-gray-900" : "bg-indigo-800"
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
                <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 sm:w-1/2 m-2">
                  <b title="Learning Management System">LMS</b>
                </h4>
                <h4 className="bg-yellow-600 p-4 text-gray-200 font-bold text-lg text-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 sm:w-1/2 m-2">
                  Human Resource
                </h4>
                <h4 className="bg-gray-600 p-4 text-gray-200 font-bold text-lg text-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110  sm:w-1/2 m-2">
                  Online Exmination
                </h4>
              </div>
              <div className="flex flex-col  justify-around sm:flex-row">
                <h4 className="bg-red-600 p-4 text-gray-200 font-bold text-lg text-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 sm:w-1/2 m-2">
                  <b title="Learning Management System">Somcoders.com</b>
                </h4>
                <h4 className="bg-green-600 p-4 text-gray-200 font-bold text-lg text-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 sm:w-1/2 m-2">
                  Somcoders Android
                </h4>
                <h4 className="bg-blue-600 p-4 text-gray-200 font-bold text-lg text-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 sm:w-1/2 m-2">
                  School Management
                </h4>
              </div>
            </div>
          </section>
          <aside
          className={`md:w-1/3  flex flex-col justify-center items-center ${
            darkMode
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
                darkMode ? "text-yellow-500" : "text-indigo-500"
              }`}
            >
              Professional
            </div>
            <div className="flex flex-col justify-around flex-start">
              <h4
                className={`border-1  font-bold text-2xl text-center transform hover:rotate-180 transition  duration-150 ease-in-out  m-2 ${
                  darkMode
                    ? "border-gray-400 p-4 text-yellow-500"
                    : "border-orange-600 p-4 text-indigo-800"
                }`}
              >
                Laravel
              </h4>
              <h4
                className={`border-1  font-bold text-2xl text-center transform hover:rotate-180 transition  duration-150 ease-in-out  m-2 ${
                  darkMode
                    ? "border-gray-400 p-4 text-yellow-500"
                    : "border-orange-600 p-4 text-indigo-800"
                }`}
              >
                React
              </h4>
              <h4
                className={`border-1  font-bold text-2xl text-center transform hover:rotate-180 transition  duration-150 ease-in-out  m-2 ${
                  darkMode
                    ? "border-gray-400 p-4 text-yellow-500"
                    : "border-orange-600 p-4 text-indigo-800"
                }`}
              >
                TailwindCSS
              </h4>
            </div>
          </div>
          </aside>
        </section>
    
      </div>
    );
}

export default App;
