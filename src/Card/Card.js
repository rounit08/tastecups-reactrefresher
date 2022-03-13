import React from "react";

function Card({ title, img, description, price }) {
  return (
    <div className="card">
      <h3 className="cardTitle"> {title}</h3>
      <img className="cardImage" src={img} />
      <p className="cardDes">{description}</p>
      <h4 className="cardPrice">{price}</h4>
    </div>
  );
}

export default Card;
