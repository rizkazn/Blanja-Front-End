import React, { Component } from "react";
import Navbar from '../../components/Navbar2/Navbar2'
import Detail from '../../components/DetailProduct/detailprod'
import axios from "axios"
import "./detail.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        product: [],
      }
    }

      componentDidMount() {
        const id_search = this.props.match.url;
        let array = id_search.split("");
        let length = array.length;
        let array1 = array.slice(10, (length));
        let element = ''
        for (let i = 0; i < array1.length; i++) {
          element = element + array1[i];
        }

      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API}/products/search/name?product_name=${element}`
      }).then((res) => {
          this.setState({
              product: res.data.result,
          })
      })     
    }
  
      render() {
    
        return (
            <div>
                <Navbar />
                {this.state.product.map((prod) => {
                    return (
                        <Detail
                            product_image={prod.product_image}
                            product_name={prod.product_name}
                            product_price={prod.product_price}
                            product_brand={prod.product_brand}
                            product_size={prod.product_size}
                            product_qty={prod.product_qty}
                            description={prod.description}
                            product_colour={prod.product_colour}
                        />
                    )
                })}
            </div>
        )
    }
}

export default App