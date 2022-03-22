import React from 'react';
import { Link } from "@reach/router";

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
        <Link className={classes}
        to={props.to}
      >
    {props.children}
      </Link>
    );
}

export default MenuLink;