import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from '../Card/Card'
import "./News.css";
import axios from 'axios'

export default class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      productNews: [],
    }
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:9000/products/",
    }).then((res) => {
      console.log(res.data.data)
      this.setState({
        productNews: res.data.data,
      })
    }).catch(err => {
        console.log(err)
    })
  }

    render() {
        return (
          <main className="container">
            <div className="item">
              <h3><b>New</b></h3>
              <span>You’ve never seen it before!</span>
              <div className="row">
                <div className="col">
                {this.state.productNews.map((el) => (
                  <Link className="link" to={''}>
                    <Card 
                        product_image={el.product_image}
                        product_name={el.product_name}
                        product_price={el.product_price}
                        product_brand={el.product_brand}
                      /> 
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </main>
        )
    }
  }