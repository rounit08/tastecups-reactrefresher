import React from "react";
import "./Lentil.css";
import chickensoup from "../../Images/Chicken/chickensoup.jpg";

import Card from "../../Card/Card";

function Lentil() {
  return (
    <div>
      <Card
        title="Lentil TAPATAP Soup"
        img={chickensoup}
        price="₹599"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Lentil PeriPeri Soup"
        img={chickensoup}
        price="₹799"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Lentil Crunchy orange Soup"
        img={chickensoup}
        price="₹299"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Latte lentil"
        img={chickensoup}
        price="₹399"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />
    </div>
  );
}

export default Lentil;
