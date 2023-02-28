import React, { Component } from 'react'
import axios from 'axios';
class Contact extends Component {
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
			<>
				<div className="breadcrumbs">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="bread-inner">
									<ul className="bread-list">
										<li><a href="#">Anasayfa<i className="fa fa-arrow-right"></i></a></li>
										<li className="#"><a href="blog-single.html">İletişim</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container' style={{ textAlign: "center", paddingTop: "37px" }}>
					<h3>------ İletişim ------</h3>
				</div>
				<section id="contact-us" className="contact-us section">
					<div className="container">
						<div className="contact-head">
							<div className="row">
								<div className="col-lg-8 col-12">
									<div className="form-main">
										<div className="title">
											<h4>İletişime Geçin</h4>
											<h3>Bize mesaj yazın</h3>
										</div>
										<form className="form" method="post" action="mail/mail.php">
											<div className="row">
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<label>Adınız<span>*</span></label>
														<input name="name" type="text" placeholder="" />
													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<label>Soyadınız<span>*</span></label>
														<input name="subject" type="text" placeholder="" />
													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<label>Mail Adresiniz<span>*</span></label>
														<input name="email" type="email" placeholder="" />
													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<label>Telefon Numaranız<span>*</span></label>
														<input name="company_name" type="text" placeholder="" />
													</div>
												</div>
												<div className="col-12">
													<div className="form-group message">
														<label>Mesajınız<span>*</span></label>
														<textarea name="message" placeholder=""></textarea>
													</div>
												</div>
												<div className="col-12">
													<div className="form-group button">
														<button type="submit" className="btn ">Mesajı Gönder</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="col-lg-4 col-12">
									{
										this.state.firma ? this.state.firma.map((post, i) => {
											return (
												<div className="single-head" key={i}>
													<div className="single-info">
														<i className="fa fa-phone"></i>
														<h4 className="title">Bizi Şimdi Ara:</h4>
														<ul>
															<li>0{post.firma_tel1}</li>
															<li>0{post.firma_tel2}</li>
														</ul>
													</div>
													<div className="single-info">
														<i className="fa fa-envelope-open"></i>
														<h4 className="title">Email:</h4>
														<ul>
															<li><a href={post.firma_mail}>{post.firma_mail}</a></li>
														</ul>
													</div>
													<div className="single-info">
														<i className="fa fa-location-arrow"></i>
														<h4 className="title">Adresimiz:</h4>
														<ul>
															<li>{post.firma_adres}</li>
														</ul>
													</div>
												</div>

											)
										}) : null
									}

								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}
export default Contact;