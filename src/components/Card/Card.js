import './Card.scoped.css'
import React from "react"
import { Link } from "react-router-dom"
import star from '../../assets/Star.svg'
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = (props) => {
  return (
    <div className="container">
    <Link to={`/detail/${props.product_name}`}>
      <div className="card card-md-5 cursor">
        <div className="images">
          <img src={props.product_image} className="image" alt="" />
        </div>
        <div className="card-body">
          <p className="title">{props.product_name}</p>
          <ul className="list">
            <li className="price">Rp. {props.product_price}</li>
            <li className="store">{props.product_brand}</li>
            <li className="rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              (5/5)
            </li>
          </ul>
        </div>
      </div>
      </Link>
      </div>
  )
}

export default Cards