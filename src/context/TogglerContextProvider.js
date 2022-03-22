import React,{createContext,useState} from 'react';

const TogglerContext = createContext();

function TogglerContextProvider(props) {

    const [toggle,setToggle]  = useState(true);

    function toggler (){
        setToggle(!toggle);
    };

    return (
        <TogglerContext.Provider value={{toggle,toggler}}>
            {props.children}
        </TogglerContext.Provider>
    );
}

export {TogglerContextProvider,TogglerContext};