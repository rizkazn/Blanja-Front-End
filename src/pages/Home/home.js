import React, { Component } from "react";
import Navbar2 from '../../components/Navbar2/Navbar2'
import Promo from '../../components/CardPromo/Promo'
import Category from '../../components/Categories/category'
import Cards from '../../components/Card/Card'
import axios from "axios"


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productNew: [],
    }
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:9000/products",
    }).then((res) => {
      this.setState({
        productNew: res.data.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    
    return (
        <div>
          <Navbar2 />
            <main>
              <Promo />
                <Category />
                <div className="container">
                  <div className="mt-5">
                    <h3 className="title"><b>New</b></h3>
                    <span className="desc">You've never seen it before!</span> 
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 box">
                      {this.state.productNew.map((el) => {
                        return (
                            <Cards
                              product_image={el.product_image}
                              product_name={el.product_name}
                              product_price={el.product_price}
                              product_brand={el.product_brand}
                            />
                        )
                      })}
                    </div>
                  </div>
                </div>
            </main>
        </div>
    )
  }
}

export default Home