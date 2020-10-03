import React from "react";
import { Router, Link } from "@reach/router";
import "../index.css";
import Dashboard from "./dashboard";
import Resume from "./resume";
import Contact from "./contact";

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
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
                to="/"
              >
                Abdifatah A
              </Link>
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
                Home
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
                to="/resume"
              >
                Resume
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
                to="/contact"
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
        <Router>
          {/* <Home path="/" /> */}
          <Dashboard path="/" />
          <Resume path="/resume" />
          <Contact path="/contact" />
        </Router>
      </div>
    );
  }
}

export default App;
