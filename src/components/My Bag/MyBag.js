import React from 'react'
import { Link } from "react-router-dom";
import "./MyBag.css";
import prod1 from '../../assets/gez-xavier-mansfield.svg'
import prod2 from '../../assets/kemal-alkan.svg'

const Mybag = () => {
    return (
      <main>
        <div className="container">
          <form action="../checkout/checkout.html">
            <div className="row">
              <h3>My Bag</h3>
              <div className="col-8 left">
                <div className="all-item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Select all items <span>(2 items selected)</span>
                    </label>
                  </div>
                  <Link to='/' href className="delete">Delete</Link>
                </div>
                <div className="item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  </div>
                  <img src={prod1} alt={prod2} />
                  <div className="detail">
                    <h5>Men's formal suit - Black</h5>
                    <span>Zalora Cloth</span>
                  </div>
                  <div className="count">
                    <button type="button" className="minus">--</button>
                    <span>1</span>
                    <button type="button" className="plus">+</button>
                  </div>
                  <p>$ 20.0</p>
                </div>
                <div className="item">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  </div>
                  <img src={prod2} alt={prod2} />
                  <div className="detail">
                    <h5>Men's formal</h5>
                    <span>Zalora Cloth</span>
                  </div>
                  <div className="count">
                    <button type="button" className="minus">--</button>
                    <span>1</span>
                    <button type="button" className="plus">+</button>
                  </div>
                  <p>$ 20.0</p>
                </div>
              </div>
              <div className="col-4 right">
                <h5>Shopping summary</h5>
                <div className="sub-total">
                  <span>Total price</span>
                  <span className="price">$ 40.0</span>
                </div>
                <button type="submit">Buy</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }

export default Mybag