import React from 'react';

function ProjectHeading(props) {
    const classes = [
        props.bg ?? 'bg-yellow-900',
        'p-4',
        'text-gray-200',
        'font-bold',
        'text-lg',
        'text-center',
        'transition',
        'duration-500',
        'ease-in-out',
        'transform',
        'hover:-translate-y-1',
        'hover:scale-110',
        'sm:w-1/2',
         'm-2'
    ].join(" ");

    return (
        <h4 className={classes}>
            {props.children}
        </h4>
    );
}

export default ProjectHeading;