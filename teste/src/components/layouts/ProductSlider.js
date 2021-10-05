
import './style/ProductSlider.css';
import React, { Component } from "react";
import Slider from "react-slick";

/* import const of all products */
import {items} from '../games'

/* imports imgs */
 import gow from '../images/products/gow.jpg'; 
 import got from '../images/products/got.jpg';
 import hzd from '../images/products/hzd.jpg';
 import racra from '../images/products/racra.jpg';
 import spider from '../images/products/smmm.jpg';
 import unch from '../images/products/undc.jpg';
 import tlou from '../images/products/tlou.jpg'; 
 import tlou2 from '../images/products/tlou2.jpg'; 



  function Arrow(props) {
    console.log(items)
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", filter: "invert(1)" }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {   var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
        <div className="carousel">
        <div className="carousel-container">
          <h2 className="carousel-title">ON SALE</h2>
          <Slider {...settings}>
            
            {items.map(item =>
              <a href={item.page}>
              <div className="product-box" key={item.id}>
              <img src={item.image} />
              <h3 className='price'>${item.price}</h3>
              <h3>{item.name}</h3>
              </div>
              </a>
              )}      

          </Slider>
        </div>
      </div>
      );
    }
  }
