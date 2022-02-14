import React from 'react';
import style from './navBar.module.css';

// const NavBar = (props) => {
//   const {mobileMenu, childern} = props;
//   return (
//     <nav>
//       <ul className={`${mobileMenu ? style.containerItems : style.containerItemsClose}`}>
//         {childern}
//       </ul>
//     </nav>
//   );
// }

const NavBar = (props) => {
  const {mobileMenu, navItem1, navItem2} = props;
  return (
    <nav className={`${mobileMenu ? style.nav : style.navClose}`}>
      <ul className={style.containerItems}>
        {navItem1}
        {navItem2}
      </ul>
    </nav>
  );
}

export {NavBar};