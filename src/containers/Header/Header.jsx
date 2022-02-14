import React from 'react';
import style from './header.module.css';
import { Link } from "react-router-dom";
import { Logo } from '../../assets/icons/logo/Logo';
import { NavBar } from '../../components/NavBar/NavBar';
import { HamburgerMenu } from '../../components/HamburgerMenu/HamburgerMenu'
import { NavBarItem } from '../../components/NavBarItem/NavBarItem';
import { FaHome, FaStoreAlt } from 'react-icons/fa';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false); //this state allows open and close the hamburger menu

  //function to change the mobileMenu state
  const menu = () => {
    setMobileMenu(!mobileMenu); 
  }

  return (
    <header className={style.header}>
      <HamburgerMenu 
        mobileMenu = {mobileMenu}
        onClick = {menu} 
      />
      <NavBar mobileMenu = {mobileMenu}>
        <NavBarItem 
          route = '/home'
          onClick = {menu}
          text = 'Inicio'
          icon = {<FaHome />}
        />
        <NavBarItem 
          route = '/store'
          onClick = {menu}
          text = 'Tienda'
          icon = {<FaStoreAlt />}
        />
      </NavBar>

      <div className={style.logo}>
        <Link to = '/home'>
          <i>
            <Logo />
          </i>
        </Link>
      </div>
      <div className={style.containerShoppingCart}>
      </div>
    </header>
  );
}

export {Header};