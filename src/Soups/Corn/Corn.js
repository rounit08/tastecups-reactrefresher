import React from "react";
import "./Corn.css";
import Card from "../../Card/Card";
import chickensoup from "../../Images/Chicken/chickensoup.jpg";

function Corn() {
  return (
    <div>
      <Card
        title="Corn TAPATAP Soup"
        img={chickensoup}
        price="₹599"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Corn PeriPeri Soup"
        img={chickensoup}
        price="₹799"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Corn Crunchy orange Soup"
        img={chickensoup}
        price="₹299"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />

      <Card
        title="Latte corn"
        img={chickensoup}
        price="₹399"
        description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
      />
    </div>
  );
}

export default Corn;
