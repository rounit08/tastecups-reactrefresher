import React from "react";
import "./Navbar.css";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";

function Navbar() {
  return (
    <div className="navbar">
      <SoupKitchenIcon className="navbarIcon" fontSize="large" />
      <h1 className="navbarText">TasteCups.</h1>
    </div>
  );
}

export default Navbar;
