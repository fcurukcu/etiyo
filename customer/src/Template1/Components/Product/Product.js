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
                                <h2>Tüm Ürünler</h2>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                             
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
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
