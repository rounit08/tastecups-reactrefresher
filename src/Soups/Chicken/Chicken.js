import React from "react";
import "./Chicken.css";
import Card from "../../Card/Card";
import chickensoup from "../../Images/Chicken/chickensoup.jpg";

function Chicken() {
  return (
    <div className="chicken">
      <div className="chickenRow">
        <Card
          title="Chicken TAPATAP Soup"
          img={chickensoup}
          price="₹599"
          description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
        />

        <Card
          title="Chicken PeriPeri Soup"
          img={chickensoup}
          price="₹799"
          description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
        />

        <Card
          title="Chicken Crunchy orange Soup"
          img={chickensoup}
          price="₹299"
          description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
        />

        <Card
          title="Latte chicken"
          img={chickensoup}
          price="₹399"
          description="A low fat soup with the perfect combination of healthy veggies and chicken balls. So healthy and filling, you can make this for a light dinner meal"
        />
      </div>
    </div>
  );
}

export default Chicken;
