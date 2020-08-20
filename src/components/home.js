import React from "react";
import { Link } from "@reach/router";
import Profile from "../assets/img/profile.jpg";

function App() {
  return (
    <div className="w-full mx-auto max-w-6xl">
      <header className="w-full  flex  md:mx-auto bg-indigo-700 justify-between items-center py-4 font-sans ">
        <div className="text-2xl font-bold text-white ml-6">Abdifatah</div>
        <label className="md:hidden block">Toggle</label>
        <nav className="flex text-2xl text-gray-200 items-center hidden md:block">
          <Link className="px-3" to="/">
            Blog
          </Link>
          <Link className="px-3" to="/">
            Projects
          </Link>
          <Link className="px-3" to="/">
            Contact
          </Link>
        </nav>
      </header>

      <section className="w-full  mx-auto flex flex-col sm:flex-row">
        <section className="md:w-2/3 bg-indigo-800 p-8 text-right">
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
            <div className="flex justify-around">
              <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center w-1/2 m-2">
                Learning Management System
              </h4>
              <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center w-1/2 m-2">
                Humar Resource
              </h4>
              <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center w-1/2 m-2">
                Online Exmination
              </h4>
            </div>
          </div>
        </section>
        <aside className="md:w-1/3 bg-gray-200 flex flex-col justify-center items-center">
          <img
            className="rounded-full border-8 my-4 w-64 h-64 border-indigo-500"
            src={Profile}
          />

          <div className="my-5 w-full">
            <div className="w-full text-indigo-500 font-bold text-3xl text-center d-block">
              Professional
            </div>
            <div className="flex flex-col justify-around flex-start">
              <h4 className="border-2 border-orange-600 p-4 text-indigo-800 font-bold text-2xl text-center  m-2">
                Laravel
              </h4>
              <h4 className="border-2 border-orange-600 p-4 text-indigo-800 font-bold text-2xl text-center  m-2">
                React
              </h4>
              <h4 className="border-2 border-orange-600 p-4 text-indigo-800 font-bold text-2xl text-center  m-2">
                Tailwind
              </h4>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default App;
