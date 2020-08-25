import React from "react";
import { Link } from "@reach/router";
import Profile from "../assets/img/profile.jpg";
import "../index.css";

class App extends React.Component {
  state = {
    isBoxVisible: true,
    darkMode: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  changeMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { isBoxVisible, darkMode } = this.state;

    return (
      <div className="w-full mx-auto max-w-6xl">
        <nav
          className={`flex items-center justify-between flex-wrap  p-6 items-center py-4 font-sans 
          ${darkMode ? "bg-gray-800" : "bg-indigo-700"}`}
        >
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">
              Abdifatah A
            </span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={this.toggle.bind()}
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div
              id="nav"
              className={`text-sm lg:flex-grow ${
                isBoxVisible ? "hidden md:block flex flex-col" : "sm:block"
              }`}
            >
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
                to="/"
              >
                Blog
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
                to="/"
              >
                Projects
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
                to="/"
              >
                Contact
              </Link>
            </div>
            <div
              className={`${
                isBoxVisible ? "hidden md:block flex flex-col" : "sm:block"
              }`}
            >
              <Link
                className="inline-block text-2xl px-4 py-2  text-white  mt-4 lg:mt-0 mode"
                to="/"
                onClick={this.changeMode.bind()}
              >
                {darkMode ? "🌞" : "🌙"}
              </Link>
            </div>
          </div>
        </nav>

        <section className="w-full  mx-auto flex flex-col sm:flex-row">
          <section
            className={`md:w-2/3  p-8 text-right ${
              darkMode ? "bg-gray-900" : "bg-indigo-800"
            }`}
          >
            <h4 className="text-orange-400 text-4xl">Abdifatah Abdilahi</h4>
            <p className="text-gray-200">
              I'm a Fullstack Enginner in Mogadishu
            </p>
            <p className="text-2xl text-gray-200 leading-relaxed text-left">
              {" "}
              I am a full-stack PHP developer.I spend my days designing and
              developing web applications, and teaching on Somcoders. I
              specialize in the Laravel PHP framework on the backend, React.js
              on the frontend ,Bootstrap and Tailwind CSS for styling. Currently
              I work full time as a Laravel developer, building internal apps
              and tools for my employer.
            </p>
            <div className="my-5">
              <div className="w-full text-orange-500 font-bold text-3xl text-center d-block">
                Side projects
              </div>
              <div className="flex flex-col  justify-around sm:flex-row">
                <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center sm:w-1/2 m-2">
                  Learning Management System
                </h4>
                <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center sm:w-1/2 m-2">
                  Humar Resource
                </h4>
                <h4 className="bg-orange-600 p-4 text-gray-200 font-bold text-lg text-center sm:w-1/2 m-2">
                  Online Exmination
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
                  className={`border-2  font-bold text-2xl text-center  m-2 ${
                    darkMode
                      ? "border-gray-400 p-4 text-yellow-500"
                      : "border-orange-600 p-4 text-indigo-800"
                  }`}
                >
                  Laravel
                </h4>
                <h4
                  className={`border-2  font-bold text-2xl text-center  m-2 ${
                    darkMode
                      ? "border-gray-400 p-4 text-yellow-500"
                      : "border-orange-600 p-4 text-indigo-800"
                  }`}
                >
                  React
                </h4>
                <h4
                  className={`border-2  font-bold text-2xl text-center  m-2 ${
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
}

export default App;
