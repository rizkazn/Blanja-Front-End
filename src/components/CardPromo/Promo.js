import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import promo1 from "../../assets/slider1.jpg"
import promo2 from"../../assets/Card Promotion.jpg"
import promo3 from "../../assets/Card Promotion 2.jpg"
import promo4 from "../../assets/slider4.jpg" 
import './Promo.scoped.css'

const Promo = () => {
    const settings = {
      dots: false,
      centerMode: true,
      centerPadding: "80px",
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: "100px",
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "-30px",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          }
        }
      ]
    }

    return (
      <div className="container">
        <div className="main-slider">
            <Slider {...settings}>
            <div className="slider-content">
                <img src={promo1} alt="" />
            </div>
            <div className="slider-content">
                <img src={promo2} alt="" />
            </div>
            <div className="slider-content">
                <img src={promo3} alt="" />
            </div>
            <div  className="slider-content">
                <img src={promo4} alt="" />
            </div>
            </Slider>
        </div> 
      </div>   
    )
  }

export default Promo 