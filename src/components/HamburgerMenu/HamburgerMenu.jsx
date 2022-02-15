import React from 'react'
import style from './hamburgerMenu.module.css'
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerMenu = (props) => {
  const {mobileMenu, onClick} = props;
  return (
    <span onClick={() => onClick()} className = {style.containerBurgerMenu}>
      {mobileMenu ? <FaTimes /> : <FaBars />}
    </span>
  );
}

export {HamburgerMenu}