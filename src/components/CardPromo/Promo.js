import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import promo1 from "../../assets/Banner Images/slider1.jpg"
import promo2 from"../../assets/Banner Images/Card Promotion.jpg"
import promo3 from "../../assets/Banner Images/Card Promotion 2.jpg"
import promo4 from "../../assets/Banner Images/slider4.jpg" 
import './Promo.scoped.css'

const Promo = () => {
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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