import React from "react";
import "./Veggie.css";
import Card from "../../Card/Card";
import chickensoup from "../../Images/Chicken/chickensoup.jpg";

function Veggie() {
  return (
    <div>
      <Card
        title="Veggie TAPATAP Soup"
        img={chickensoup}
        price="₹599"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Veggie PeriPeri Soup"
        img={chickensoup}
        price="₹799"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Veggie Crunchy orange Soup"
        img={chickensoup}
        price="₹299"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Latte Veggie"
        img={chickensoup}
        price="₹399"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />
    </div>
  );
}

export default Veggie;
