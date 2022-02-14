import React from 'react'
import { Link } from "react-router-dom";
import style from "./navBarItem.module.css"

const NavBarItem = (props) => {
  const {route, text, onClick, icon} = props;
  return (
    <li className={style.item}>
      <Link 
        to = {route} 
        onClick = {onClick} 
        className={style.textItem}
      > 
        <i className={style.icon}>
          {icon}
        </i>
        {text} 
      </Link>
    </li>
  );
}

export {NavBarItem};