import React from "react";
import "./list.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const List = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

  };

  const data = [
    {
      src:"/images/carousel/shoe2.png",
      name: "Yung 96 Trainer",
      price: "₹899"
    },
    {
      src:"/images/carousel/shoe3.png",
      name: "Pod-S3.1 Trainer",
      price: "₹799"
    },
    {
      src:"/images/carousel/shoe4.png",
      name: "Nike Lunar Force 1 Duckboot",
      price: "₹499"
    },
    {
      src:"/images/carousel/shoe2.png",
      name: "Air Max 95 Essential",
      price: "₹1099"
    },
    {
      src:"/images/carousel/shoe5.png",
      name: "RS-0 Toys OLD",
      price: "₹799"
    }
  ]


  return (
    <div className="list">
    <h2>Latest Added</h2>
        <Slider {...settings}>
        {data.map((data) => (

        <div className="list-img">
        <button className="hover-icon">Add to cart</button>
        <i class="fa-regular fa-heart"></i>
          <img src={data.src} alt="shoe" />
          <div className="name">
            <p>{data.name}</p>
            <p>{data.price}</p>
          </div>
        </div>

        ))}
        </Slider>
    </div>
  );
};

export default List;
