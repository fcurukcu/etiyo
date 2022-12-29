import React, { Component } from 'react'
import pr1 from '../../Assets/Image/products/p9.jpg';
import pr2 from '../../Assets/Image/products/p10.jpg';
import { Link } from 'react-router-dom';
class OneProduct extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
  render() {
    const produc=this.props.product;
    // console.log("ssdfsdfsegeg",produc);
    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
        <div className="single-product">
            <div className="product-img">
                <Link to={"/product-detail/"+produc.firmaUrun.id}>
                    <img className="default-img" src={pr1} alt="#" />
                    {/* <img className="hover-img" src={pr2} alt="#" /> */}
                </Link>
                <div className="button-head">
                    {/* <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                    </div> */}
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Sepete Ekle</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><Link to={"/product-detail/"+produc.firmaUrun.id}>{produc.firmaUrun.adi}</Link></h3>
                <div className="product-price">
                    <span>{produc.firmaUrun.fiyat}</span>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default OneProduct;
