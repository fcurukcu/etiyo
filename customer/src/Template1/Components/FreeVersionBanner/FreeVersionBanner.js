import React, { Component } from 'react'

class FreeVersionBanner extends Component {
  render() {
    return (
        <section className="section free-version-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8 offset-md-2 col-xs-12">
                    <div className="section-title mb-60">
                        <span className="text-white wow fadeInDown" data-wow-delay=".2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown"}}>Eshop Free Lite version</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".4s" style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp"}}>Currently You are using free<br/> lite Version of Eshop.</h2>
                        <p className="text-white wow fadeInUp" data-wow-delay=".6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInUp"}}>Please, purchase full version of the template to get all pages,<br/> features and commercial license.</p>

                        <div className="button">
                            <a href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/" target="_blank" rel="nofollow" className="btn wow fadeInUp" data-wow-delay=".8s">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
export default FreeVersionBanner;
