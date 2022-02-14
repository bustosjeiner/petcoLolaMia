import React from "react";
import style from "./home.module.css";
import { FaStoreAlt } from 'react-icons/fa';
import { Button } from "../../components/Button/Button";

const Home = () => {
  return (
    <main className={style.containerHome}>
      <img 
        src="https://img.etimg.com/thumb/width-640,height-480,imgsize-260682,resizemode-1,msid-48835470/magazines/panache/why-cats-are-more-independent-than-dogs/cat-kitten-dog-puppy_getty_640x480.jpg" 
        alt="dog and cat image"
        className={style.background}  
      />
      <div className={style.home}>
        <h1 className={style.title}>Petco Lola-Mia</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          consectetur culpa tempore vitae eveniet ab minima et debitis
          obcaecati. Cumque dolor totam at laudantium molestias odio optio
          distinctio magnam vero.
        </p>
        <Button
          type='button'
          route='/store' 
          icon={<FaStoreAlt />}
          text='Conoce nuestros productos' 
        />
      </div>
    </main>
  );
};

export { Home };
