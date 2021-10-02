import './style/SingleSlider.css';
import React, { Component } from "react";
import Slider from "react-slick";

/* import imgs */
import img1 from '../images/ellie.jpg'
import img2 from '../images/got-directors-cut.jpg'
import img3 from '../images/kratos.jpg'


export default class AutoPlay extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 5000,
          cssEase: "linear"
        };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img src={img1} className='main-img'/>
            </div>
            <div>
            <img src={img2} className='main-img'/>
            </div>
            <div>
            <img src={img3} className='main-img'/>
            </div>
          </Slider>
        </div>
      );
    }
  }