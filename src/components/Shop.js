import React from "react";
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="grid">
      <div className="male-one">
        <h1>Shop <br />by  gender</h1>
        <div className="male">
          <img src="/images/male.jpg" alt="male" />
          <h3>MEN FOOTWEAR</h3>
        </div>
        <div className="email">
          <h2>Subsribe <br /> to receive offers</h2>
          <div> 
          <input type="text"
          placeholder="your address@gmail.com"
           />
          <button>Join Now</button>
          </div>
        </div>
        </div>
        <div className="female">
          <img src="/images/female.jpg" alt="female" />
          <h3>WOMEN FOOTWEAR</h3>
        </div>
        <div className="child">
          <img src="/images/child.jpg" alt="child" />
          <h3>KIDS FOOTWEAR</h3>
        </div>
      </div>
    </div>
  );
};

export default Shop;
