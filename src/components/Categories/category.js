import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import tshirt from "../../assets/Categories Images/t-shirt.jpg"
import shorts from"../../assets/Categories Images/short.jpg"
import jacket from "../../assets/Categories Images/jacket.jpg"
import pants from "../../assets/Categories Images/pants.jpg"
import shoes from "../../assets/Categories Images/shoes.jpg"
import accessories from "../../assets/Categories Images/accessories.jpg"
import bagback from "../../assets/Categories Images/bagback.jpg"
import cap from "../../assets/Categories Images/cap.jpg"
import dress from "../../assets/Categories Images/dress.jpg"
import formalsuit from "../../assets/Categories Images/formalsuit.jpg"
import glasses from "../../assets/Categories Images/glasses.jpg"
import handbag from "../../assets/Categories Images/handbag.jpg"
import highheels from "../../assets/Categories Images/highheels.jpg"
import socks from "../../assets/Categories Images/socks.jpg"
import tie from "../../assets/Categories Images/tie.jpg"
import wristwatch from "../../assets/Categories Images/wristwatch.jpg"
import './category.scoped.css'
import { Link } from "react-router-dom"

const Category = () => {
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }
      
    return (
      <div className="container">
        <div className="main-slider">
            <h3 className="title"><b>Category</b></h3>
              <span className="desc">What are you currently looking for!</span> 
              <div className="row" >
                <Slider {...settings}>
                <Link to='/category/T-Shirt'>
                  <div className="slider-content">
                        <img src={tshirt} alt="" />
                  </div>
                  </Link>
                  <div className="slider-content">
                        <img src={shorts} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={jacket} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={pants} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={shoes} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={accessories} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={bagback} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={cap} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={dress} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={formalsuit} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={glasses} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={handbag} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={highheels} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={socks} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={tie} alt="" />
                  </div>
                  <div className="slider-content">
                        <img src={wristwatch} alt="" />
                  </div>
              </Slider>
              </div>
          </div>   
        </div> 
    )
  }

export default Category