import React, { Component } from 'react'
import pr1 from '../../Assets/Image/products/p9.jpg';
import pr2 from '../../Assets/Image/products/p10.jpg';
class OneProduct extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
  render() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src={pr1} alt="#" />
                    <img className="hover-img" src={pr2} alt="#" />
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
    )
  }
}
export default OneProduct;
