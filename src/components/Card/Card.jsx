import React from 'react'

const Card = (props) => {
  const {img, name, price} = props;
  return (
    <div>
      <img src={img} alt= {name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <div>
        <Button />
        <span></span>
        <Button />
      </div>
      <div><Button /></div>
    </div>
  );
}

export {Card};