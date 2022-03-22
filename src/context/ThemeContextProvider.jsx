import React,{createContext,useEffect,useState} from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {

  const [darkMode,setDarkMode]  = useState("light");

  const themeSwitcher = darkMode === "light" ? "dark" : "light";

  function changeMode(){
    localStorage.setItem("theme",themeSwitcher);
    setDarkMode(themeSwitcher);
  };

  useEffect(() => {
     const localTheme =  localStorage.getItem("theme");
          localTheme && setDarkMode(localTheme);
  },[]);
  
    return (
        <ThemeContext.Provider value={{darkMode,changeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeContextProvider,ThemeContext};