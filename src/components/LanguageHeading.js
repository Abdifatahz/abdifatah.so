import React from 'react';

function LanguageHeading(props) {
    const classes = [
        props.darkMode === "dark"
        ? "border-gray-400 p-4 text-yellow-500"
        : "border-orange-600 p-4 text-indigo-800",
        'border-1',
        'font-bold',
        'text-2xl',
        'text-center',
        'transform',
        'hover:rotate-180',
        'transition',
        'duration-150',
        'ease-in-out',
        'm-2'
    ].join(" ");

    return (
        <h4 className={classes}>
            {props.children}
        </h4>
        
    );
}

export default LanguageHeading;