import React, { Component } from 'react'

import OneProduct from './OneProduct';
class Product extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
    render() {
        return (
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                {/* <div className="nav-main">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                                    </ul>
                                </div> */}
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                            {[...Array(10)].map((x, i) =>
                                                <OneProduct key={i}/>
                                            )}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="tab-pane fade" id="women" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                        </a>
                                                        <div className="button-head">
                                                            <div className="product-action">
                                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                            </div>
                                                            <div className="product-action-2">
                                                                <a title="Add to cart" href="#">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                        <div className="product-price">
                                                            <span>$29.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="kids" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                        </a>
                                                        <div className="button-head">
                                                            <div className="product-action">
                                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                            </div>
                                                            <div className="product-action-2">
                                                                <a title="Add to cart" href="#">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                        <div className="product-price">
                                                            <span>$29.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="accessories" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                        </a>
                                                        <div className="button-head">
                                                            <div className="product-action">
                                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                            </div>
                                                            <div className="product-action-2">
                                                                <a title="Add to cart" href="#">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                        <div className="product-price">
                                                            <span>$29.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="essential" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                        </a>
                                                        <div className="button-head">
                                                            <div className="product-action">
                                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                            </div>
                                                            <div className="product-action-2">
                                                                <a title="Add to cart" href="#">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                        <div className="product-price">
                                                            <span>$29.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="prices" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                        </a>
                                                        <div className="button-head">
                                                            <div className="product-action">
                                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                            </div>
                                                            <div className="product-action-2">
                                                                <a title="Add to cart" href="#">Add to cart</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                                        <div className="product-price">
                                                            <span>$29.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
