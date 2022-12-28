import React, { Component } from 'react';
import logo2 from '../../Assets/Image/logo2.png';
import payments from '../../Assets/Image/payments.png';
class Footer extends Component {
	constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
  render() {
    return (
        <footer className="footer">
		<div className="footer-top section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<div className="single-footer about">
							<div className="logo">
								<a href="index.html">
                                    <img src={logo2} alt="#"/></a>
							</div>
							<p className="text">Türkiyenin tüm illerine ürün teslimi yapılabilmektedir.</p>
							<p className="call">Bir sorun var mı? 7/24 bizi arayın<span><a href="tel:123456789">+0123 456 789</a></span></p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-footer links">
							<h4>Bilgi</h4>
							<ul>
								<li><a href="#">Anasayfa</a></li>
								<li><a href="#">Ürünler</a></li>
								<li><a href="#">İletişim</a></li>
								
							</ul>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-footer social">
							<h4>İletişim</h4>
							<div className="contact">
								<ul>
									<li>NO. 342 - London Oxford Street.</li>
									<li>012 United Kingdom.</li>
									<li>info@eshop.com</li>
									<li>+032 3456 7890</li>
								</ul>
							</div>
							<ul>
								<li><a href="#"><i className="ti-facebook"></i></a></li>
								<li><a href="#"><i className="ti-twitter"></i></a></li>
								<li><a href="#"><i className="ti-flickr"></i></a></li>
								<li><a href="#"><i className="ti-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="copyright">
			<div className="container">
				<div className="inner">
					<div className="row">
						<div className="col-lg-6 col-12">
							<div className="left">
								<p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a>  -  All Rights Reserved.</p>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="right">
								<img src={payments} alt="#"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    )
  }
}
export default Footer;
