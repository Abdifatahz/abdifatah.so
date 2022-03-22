import React,{createContext,useState} from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {

  const [darkMode,setDarkMode]  = useState("light");

  const themeSwitcher = darkMode === "light" ? "dark" : "light";
  
  function changeMode(){
    setDarkMode(themeSwitcher);
  };

    return (
        <ThemeContext.Provider value={{darkMode,changeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeContextProvider,ThemeContext};