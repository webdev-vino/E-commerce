import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="flex logo">
          <img className="icon" src="/images/image.png" alt="icon" />
          <h1>snkrs</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="search..." />
          <i  class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h4>Limited offer!</h4>
        <div className=" cart">
          <p>0</p>
          <h5>MY CART</h5> 
        </div>
      </div>
      <ul>
        <li>HOME</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>NEW</li>
        <li>SALE</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
