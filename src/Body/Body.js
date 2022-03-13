import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="bodynav">
        <Link to="/chicken">
          <button id="btn1">Chicken Soup</button>
        </Link>

        <Link to="/corn">
          <button id="btn2">Corn Soup</button>
        </Link>

        <Link to="/veggie">
          <button id="btn3">Veggie Soup</button>
        </Link>

        <Link to="/mushroom">
          <button id="btn4"> Mushroom Soup</button>
        </Link>

        <Link to="/lentil">
          <button id="btn5">Lentil Soup </button>
        </Link>
      </div>
    </div>
  );
}

export default Body;
