import React, { Component } from 'react';
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
    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
        <div className="single-product">
            <div className="product-img">
                <Link to={"/product-detail/"+produc.firmaUrun.id}>
                    <img style={{width:"300px",height:"400px"}} src={require(`../../../../../backend/images/Products/${produc.firmaUrun.resim}`)}/> 
                </Link>
                <div className="button-head">
                  
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">Sepete Ekle</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><Link to={"/product-detail/"+produc.firmaUrun.id}>{produc.firmaUrun.adi}</Link></h3>
                <div className="product-price">
                    <span>{produc.firmaUrun.fiyat} TL</span>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default OneProduct;
