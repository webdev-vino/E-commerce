import React, { useState } from "react";
import "./homepage.css";


const Homepage = () => {
 
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pages = [ 
    {
      rate: "999",
      name:  "SNEAKER",
      src: "/images/whiteshoe.png",
     color: "rgb(0, 255, 174)"
    },
    {
      rate: "899",
      name:  "SNEAKER",
      src: "/images/blue.png",
      color: "rgb(255, 170, 0)"
    }

  ]

  const nextPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  return (
    <div className="homepage">
    {pages.map((page, index) => (
      <div key={index} className={`page ${index === currentPageIndex ? 'active' : ''}`}>
      <div className="shoe fade">
        <div className="background-circle" style={{backgroundColor:`${page.color}`}}></div>
        <p>&#8377;{page.rate}</p>
        <h1>{page.name}</h1>
        <pre>MORE</pre>
        <img src={page.src} alt="shoe" />
      </div>
      </div>
      ))}
      <button class="prev" onClick={prevPage}>
        ❮
      </button>
      <button class="next" onClick={nextPage}>
        ❯
      </button>
    </div>
  );
};

export default Homepage;
