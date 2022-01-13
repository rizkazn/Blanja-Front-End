import React, { Component } from 'react'
import Navbar from '../../components/Navbar2/Navbar2'
import Card from '../../components/Card/Card'
import axios from "axios"
import "./search.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        product: [],
        value: '',
      }
    }

    componentDidMount() {
        const id_search = this.props.match.url;
        let array = id_search.split("");
        let length = array.length;
        let array1 = array.slice(8, (length));
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
              value: element,
            })
          })
        }

        render() {

            return (
              <div>
                <Navbar />
                <main className="result-page">
                  <section className="container">
                    <div className="my-5">
                      <div className="my-3">
                        <h3 className="text-bold m-0">Search Result</h3>
                        <small className="text-secondary text-reguler">Result of '{this.state.value}'</small>
                      </div>
                      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 box">
        
                        {this.state.product.map((prod) => {
                          return (
                            <Card
                                product_image={prod.product_image}
                                product_name={prod.product_name}
                                product_price={prod.product_price}
                                product_brand={prod.product_brand}
                                id={prod.id}
                            />
                          )
                        })}
        
                      </div>
                    </div>
                  </section>
                </main>
        
              </div>
            )
          }
        }
        
        export default App