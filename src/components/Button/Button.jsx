import React from 'react';
import style from './button.module.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const {type, route, icon, text} = props;
  return (
    <button type={type} className={style.button}>
      <Link 
        to={route}
        className={style.textButton}
      >
        <i className={style.icon}>{icon}</i>
        {text}
      </Link>
    </button>
  );
}

export {Button};