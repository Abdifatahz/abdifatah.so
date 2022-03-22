import React,{useContext} from "react";
import "../timeline.css";
import { ThemeContext } from '../context/ThemeContextProvider';
import Nav from "./Nav";

function Resume(){

  const {darkMode} = useContext(ThemeContext);

    return (
      <div className={`w-full min-h-screen ${
          darkMode === 'dark'? "bg-gray-900" : "bg-gray-100"
        }`}
      >
          <Nav />
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Education</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    Ilays Hight School
                    <br />
                    <i>2007-2010</i>
                  </div>
                </div>
              </div>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>2010</div>
                    <div>September</div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Education</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    Nugaal University
                    <br />
                    <i>Bachelor of Computer Science</i>
                    <br />
                    <i>2010-2014</i>
                  </div>
                </div>
              </div>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>2014</div>
                    <div>October</div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10"></div>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>2014</div>
                    <div>October</div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Work Experience</div>
                  </div>
                  <div className="text-gray-600">
                    Somtel International
                    <br />
                    <i>IT officer</i>
                    <br />
                    <i>2014-2017</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10"></div>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>2019</div>
                    <div>September</div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Work Experience</div>
                  </div>
                  <div className="text-gray-600">
                    <b title="National Independent Electoral Commission">
                      NIEC
                    </b>
                    <br />
                    <i>Voter Registration IT officer</i>
                    <br />
                    <i>2018-2019</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Resume;
