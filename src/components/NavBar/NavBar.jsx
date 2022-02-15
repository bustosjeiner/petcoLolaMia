import React from 'react';
import style from './navBar.module.css';

const NavBar = (props) => {
  const {mobileMenu, children} = props;
  return (
    <nav className={`${style.nav} ${mobileMenu ? style.navOpen : style.navClose}`}>
      <ul className={style.containerItems}>
        {children}
      </ul>
    </nav>
  );
}

export {NavBar};