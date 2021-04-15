import React from "react";
import "../index.css";
import Profile from "../assets/img/profile.jpg";


class Sidebar extends React.Component {

  render() {
   return(
         <aside
          className={`md:w-1/3  flex flex-col justify-center items-center ${
            this.props.mode
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
                this.props.mode ? "text-yellow-500" : "text-indigo-500"
              }`}
            >
              Professional
            </div>
            <div className="flex flex-col justify-around flex-start">
              <h4
                className={`border-1  font-bold text-2xl text-center transform hover:rotate-180 transition  duration-150 ease-in-out  m-2 ${
                  this.props.mode
                    ? "border-gray-400 p-4 text-yellow-500"
                    : "border-orange-600 p-4 text-indigo-800"
                }`}
              >
                Laravel
              </h4>
              <h4
                className={`border-1  font-bold text-2xl text-center transform hover:rotate-180 transition  duration-150 ease-in-out  m-2 ${
                  this.props.mode
                    ? "border-gray-400 p-4 text-yellow-500"
                    : "border-orange-600 p-4 text-indigo-800"
                }`}
              >
                React
              </h4>
              <h4
                className={`border-1  font-bold text-2xl text-center transform hover:rotate-180 transition  duration-150 ease-in-out  m-2 ${
                  this.props.mode
                    ? "border-gray-400 p-4 text-yellow-500"
                    : "border-orange-600 p-4 text-indigo-800"
                }`}
              >
                TailwindCSS
              </h4>
            </div>
          </div>
        </aside>
   )
  }
}

export default Sidebar;

       