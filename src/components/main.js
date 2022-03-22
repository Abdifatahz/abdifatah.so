import React from "react";
import "../index.css";

function Main(props){

   return(
        <section
          className={`md:w-2/3  p-8 text-right ${
            props.mode ? "bg-gray-900" : "bg-indigo-800"
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
   )
}

export default Main;