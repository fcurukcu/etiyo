import React, { Component } from 'react'

import OneProduct from './OneProduct';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    state={
        selectId:null
    }
    urlChange(row) {
        this.props.urlFonk(row);
    }
    componentDidMount()
    {
     
        const url = window.location.pathname.split('/');
        const urlParca = url.length == 3 ? url[2] : null;
        this.setState({ selectId: urlParca });
       
    }
    render() {
        const url = window.location.pathname.split('/');
        const urlParca = url.length == 3 ? url[2] : null;
          const bulunanUrun=this.props.product?this.props.product.find((k)=>k.firmaUrun.id===+this.state.selectId):null;
          console.log("bulunanUrun",bulunanUrun);
        return (
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>{bulunanUrun?bulunanUrun.firmaUrun.adi:""}</h2>
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
                                                {bulunanUrun?<OneProduct  product={bulunanUrun} />:null}
                                            
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
export default ProductDetail;
