import './Card.scoped.css'
import star from '../../assets/Star.svg'

const Cards = (props) => {
  return (
    <div className="container">
      <div className="card card-md-5">
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
              (10)
            </li>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default Cards