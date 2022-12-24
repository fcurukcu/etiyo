import React, { Component } from 'react'
import OneProduct from '../../Components/Product/OneProduct'

class Products extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
  render() {
    return (
        <>
        <div className="breadcrumbs">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="bread-inner">
                      <ul className="bread-list">
                          <li><a href="index1.html">Home<i className="fa fa-arrow-right"></i></a></li>
                          <li className="active"><a href="blog-single.html">Products</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
      </div>
      <div className='container' style={{textAlign: "center",paddingTop: "37px"}}>
                        <h3>------ Products ------</h3>
                    </div>
      <section id="contact-us" className="contact-us section">
      <div className="container">
              <div className="contact-head">
                  <div className="row">
                  {[...Array(10)].map((x, i) =>
                                                <OneProduct key={i}/>
                                            )}
                  </div>
              </div>
          </div>
      </section>
      </>
    )
  }
}
export default  Products;
