import React from "react";
import star from '../../assets/Star.svg'
import "./detailprod.scoped.css"

const Cards = (props) => {
    return (
        <main className="container">
            <section className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href >Home</a></li>
                    <li className="breadcrumb-item"><a href >Category</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.category_name}</li>
                </ol>
            </section>
            <section className="products-header-wrapper">
                <div className="image-wrapper">
                    <img src={props.product_image} alt="" />
                </div>
                <div className="product-desc-wrapper">
                    <h1>{props.product_name}</h1>
                    <p>{props.product_brand}</p>
                    <div className="rating">
                    <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    <p>(5/5)</p>
                    </div>
                    <h3>Rp. {props.product_price}</h3>
                    <p className="heading">Color</p>
                    <p className="heading count">{props.product_colour}</p>
                    <div className="counter-wrapper">
                    <div className="count-wrapper">
                        <p className="heading">Size</p>
                        {/* <div className="d-flex">
                        <div className="btn">-</div> */}
                        <p className="heading count">{props.product_size}</p>
                        {/* <div className="btn plus">+</div>
                        </div> */}
                    </div>
                    <div className="count-wrapper">
                        <p className="heading">Jumlah</p>
                        {/* <div className="d-flex">
                        <div className="btn">-</div> */}
                        <p className="heading count">{props.product_qty}</p>
                        {/* <div className="btn plus">+</div>
                        </div> */}
                    </div>

                    </div>
                    <div className="action-wrapper">
                    <div className="btn-wrapper secondary">
                        <button className="btn secondary" onclick="show404()">Chat</button>
                    </div>
                    <div className="btn-wrapper secondary">
                        <a href="/src/pages/my-bag/my-bag.html" class="btn secondary">Add bag</a>
                    </div>
                    <div className="btn-wrapper primary">
                        <a className="btn primary" href>Buy Now</a>
                    </div>
                    </div>

                </div>
                {/* End Product Description  */}
                </section>
                {/* End Produt Header  */}
                {/* Start Product Info */}
                <section className="products-info-wrapper">
                <h2>Infomarsi Produk</h2>
                <div className="condition">
                    <h3>Condition</h3>
                    <p className="text-danger">New</p>
                </div>
                <br/>
                <article className="description">
                    <h3>Description</h3>
                    <p className="paragraph">{props.description}</p>
                </article>
            </section>
            {/* End Product Info */}
            {/* Start Product Review */}
            <section className="product-review">
                <h2>Product Review</h2>
                <div className="rating-wrapper">
                    <div className="rating">
                        <div className="number">
                            <p className="number-rating">5.0</p>
                            <span>/5.0</span>
                        </div>
                        <div className="stars">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="item">
                            <img src={star} alt=""/>
                        </div>
                        <div className="item">
                            <img src={star} alt=""/>
                        </div>
                        <div className="item">
                            <img src={star} alt=""/>
                        </div>
                        <div className="item">
                            <img src={star} alt=""/>
                        </div>
                        <div className="item">
                            <img src={star} alt=""/>
                        </div>
                    </div>
                    <div className="vertical">
                        <p className="item">5</p>
                        <p className="item">4</p>
                        <p className="item">3</p>
                        <p className="item">2</p>
                        <p className="item">1</p>
                    </div>
                    <div className="bars">
                        <div className="item">
                            <div class="bar proggres100"></div>
                        </div>
                        <div className="item">
                            <div class="bar proggres75"></div>
                        </div>
                        <div className="item">
                            <div class="bar proggres50"></div>
                        </div>
                        <div className="item">
                            <div class="bar proggres25"></div>
                        </div>
                        <div className="item">
                            <div class=""></div>
                        </div>
                    </div>
                    <div className="vertical">
                        <p className="item">5</p>
                        <p className="item">4</p>
                        <p className="item">3</p>
                        <p className="item">2</p>
                        <p className="item">1</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cards;