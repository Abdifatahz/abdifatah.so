import React,{createContext,useState} from 'react';

const ThemeContext = createContext();

function ThemeContextProvider(props) {

  const [darkMode,setDarkMode]  = useState(true);

  function changeMode(){
    setDarkMode(!darkMode);
  };

    return (
        <ThemeContext.Provider value={{darkMode,changeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeContextProvider,ThemeContext};