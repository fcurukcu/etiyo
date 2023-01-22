import React, { Component } from 'react';
import axios from 'axios';

class Slider extends Component {
	constructor(props) {
		super(props);
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
			<section className="hero-slider">
				{
					this.state.firma ? this.state.firma.map((post, i) => {
						return (


							<div key={i} className="single-slider" style={{ backgroundImage: `url(${require(`../../../../../backend/images/slider/${post.firma_slider}`)})` }}>
								<div className="container">
									<div className="row no-gutters">
										<div className="col-lg-9 offset-lg-3 col-12">
											<div className="text-inner">
												<div className="row">
													<div className="col-lg-7 col-12">
														<div className="hero-text">
															<h1>{post.firma_adi}</h1>
															<p style={{width:"500px"}}>{post.footer_yazi}</p>
															<div className="button">
																<a href="#" className="btn">Alışverişe Başla!</a>
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
					}) : null
				}

			</section>
		)
	}
}

export default Slider;
