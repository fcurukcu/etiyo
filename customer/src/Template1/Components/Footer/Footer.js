import React, { Component } from 'react';
import payments from '../../Assets/Image/payments.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Footer extends Component {
	constructor(props) {
		super(props);
	}

	urlChange(row) {
		this.props.urlFonk(row);
	}
	state = {

		firma: null
	}
	componentDidMount() {

		const firmId = localStorage.getItem('firmId');

		axios.get(`https://localhost:44363/firma/firmabilgilerilistesi/` + firmId)
			.then(res => {
				const firmaBilgileri = res.data.response;

				this.setState({ firma: firmaBilgileri });
			})
	}
	render() {
		return (
			<footer className="footer" style={{ background: "#7e7e7e" }}>
				<div className="footer-top section">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								{
									this.state.firma ? this.state.firma.map((post, i) => {
										return (
										
											<div className="single-footer about" key={i}>

											<div className="logo">
		
											<img key={i} style={{width:"100px",height:"40px"}} src={require(`../../../../../backend/images/firmalogo/${post.firma_logo}`)}/> 
											</div>
											<p className="text">Türkiyenin tüm illerine ürün teslimi yapılabilmektedir.</p>
											<p className="call">Bir sorun var mı? 7/24 bizi arayın<span><a href="#">0{post.firma_tel1}</a></span></p>
										</div>
										)
									}) : null
								}
								
							</div>
							<div className="col-lg-3 col-md-6 col-12">
								<div className="single-footer links">
									<h4>Bilgi</h4>
									<ul>
										<li><Link onClick={() => this.urlChange('/')} to="/">Anasayfa</Link></li>
										<li><Link onClick={() => this.urlChange('/products')} to="/products">Ürünler</Link></li>
										<li><Link onClick={() => this.urlChange('/contact')} to="/contact">İletişim</Link></li>

									</ul>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 col-12">
								<div className="single-footer social">
									<h4>İletişim</h4>
									{
									this.state.firma ? this.state.firma.map((post, i) => {
										return (
										
					
										<div key={i}>
										<div className="contact">
										<ul>
										<li>{post.firma_adres}</li>
										<li>{post.firma_mail}</li>
										<li>0{post.firma_tel2}</li>
									</ul>
								</div>
								<ul>
								<li><a href={post.firma_facebook} target="_blank"><i className="fa fa-facebook"></i></a></li>
									<li><a href={post.firma_twitter} target="_blank"><i className="fa fa-twitter"></i></a></li>
									<li><a href={post.firma_linkedin} target="_blank"><i className="fa fa-linkedin"></i></a></li>
									<li><a href={post.firma_instagram} target="_blank"><i className="fa fa-instagram"></i></a></li>
								</ul>
								</div>
									
									
										)
										
									}) : null
								}
									
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
										<img src={payments} alt="#" />
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
