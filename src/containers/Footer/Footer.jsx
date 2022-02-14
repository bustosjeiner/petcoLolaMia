import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.containerText}>
        <p className={style.text}>
          Todos los derechos reservados
        </p>
        <p className={style.text}> 
          Creade por Jeiner Bustos @bustosjeiner
        </p>
        <p className={style.text}>
          Copyright © 2022.
        </p>   
      </div>
    </footer>
  );
}

export {Footer};