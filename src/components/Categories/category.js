import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import tshirt from "../../assets/T-Shirt.jpg"
import shorts from"../../assets/Shorts.jpg"
import jacket from "../../assets/Jacket.jpg"
import pants from "../../assets/Pants.jpg"
import shoes from "../../assets/Shoes.jpg"
import './category.scoped.css'

const Category = () => {
    const settings = {
      dots: false,
      infinite: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
                <Slider {...settings}>
                  <div className="slider-content">
                        <img src={tshirt} className="card" alt="" />
                      </div>
                  <div className="slider-content">
                        <img src={shorts} className="card" alt="" />
                      </div>
                  <div className="slider-content">
                        <img src={jacket} className="card" alt="" />
                      </div>
                  <div className="slider-content">
                        <img src={pants} className="card" alt="" />
                      </div>
                  <div className="slider-content">
                        <img src={shoes} className="card" alt="" />
                  </div>
              </Slider>
          </div>   
        </div> 
    )
  }

export default Category