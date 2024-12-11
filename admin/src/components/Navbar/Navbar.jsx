import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <img className="profile" src={assets.react.svg} alt="profile" />
    </div>
  );
};

export default Navbar;
