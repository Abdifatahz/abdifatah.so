import React,{useContext} from 'react';
import { Link } from "@reach/router";
import { ThemeContext } from '../context/ThemeContextProvider';
import { TogglerContext } from "../context/TogglerContextProvider";
import MenuLink from './MenuLink';
import {BsSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'


function Nav() {
  
    const {darkMode,changeMode} = useContext(ThemeContext);
    const {toggle,toggler}      = useContext(TogglerContext);

    return (
        <nav
        className={`flex items-center justify-between flex-wrap  p-6 items-center py-4 font-sans 
        ${darkMode === "dark" ? "bg-gray-800" : "bg-indigo-700"}`}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <MenuLink to="/"> Abdifatah Abdilahi</MenuLink>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggler}
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full lg:flex lg:items-center lg:w-auto lg:justify-items-end">
          <div id="nav" className={`text-sm lg:flex-grow ${toggle ? "hidden md:block flex flex-col" : "sm:block"}`}>
            <MenuLink to="/" >Home</MenuLink>
            <MenuLink to="/resume">Resume</MenuLink>
            <MenuLink to="/contact">Contact</MenuLink>
          </div>
          <div className={`${toggle ? "hidden md:block flex flex-col mt-3" : "sm:block"}`}>
            <Link
                className="inline-block text-2xl px-4 py-2 transition  duration-700 ease-in-out text-white lg:mt-0 mode"
                to="#" onClick={changeMode}
              >
              {darkMode === "dark" ? <BsSunFill/> : <MdDarkMode />}
            </Link>
          </div>
        </div>
      </nav>
    );
}

export default Nav;