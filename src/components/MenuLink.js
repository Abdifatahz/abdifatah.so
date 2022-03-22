import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLink(props) {
  const classes = [
    'block',
    'mt-4',
    'text-xl',
    'lg:inline-block',
    'lg:mt-0',
    'text-teal-200',
    'hover:text-yellow-400',
    'mr-4'
  ].join(" ");
  
    return (
        <NavLink className={classes}
        to={props.to}
      >
    {props.children}
      </NavLink>
    );
}

export default MenuLink;