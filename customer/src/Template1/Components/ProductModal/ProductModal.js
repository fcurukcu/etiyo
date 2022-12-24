import React, { Component } from 'react'

class ProductModal extends Component {
  render() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
                    </div>
                    <div className="modal-body">
                        <div className="row no-gutters">
							<div className="col-lg-6 offset-lg-3 col-12">
								<h4 style={{marginTop:"100px",fontSize:"14px", fontWeight:500, color:"#F7941D", display:"block", marginBottom:"5px"}}>Eshop Free Lite</h4>
								<h3 style={{fontSize:"30px",color:"#333"}}>Currently You are using free lite Version of Eshop.</h3>
								<p style={{display:"block", marginTop:"20px", color:"#888", fontSize:"14px", fontWeight:400}}>Please, purchase full version of the template to get all pages, features and commercial license</p>
								<div className="button" style={{marginTop:"30px"}}>
									<a href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/" target="_blank" className="btn" style={{color:"#fff"}}>Buy Now!</a>
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
export default ProductModal;