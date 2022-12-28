import React, { Component } from 'react'
import slider from '../../Assets/Image/slider-image2.jpg';
 class Slider extends Component {
  render() {
    return (
        <section className="hero-slider">
		<div className="single-slider" style={{backgroundImage:`url(${slider})`}}>
			<div className="container">
				<div className="row no-gutters">
					<div className="col-lg-9 offset-lg-3 col-12">
						<div className="text-inner">
							<div className="row">
								<div className="col-lg-7 col-12">
									<div className="hero-text">
										<h1><span>50% kadar indirim</span>Erkek Gömleklerinde</h1>
										<p>Tüm aradığınız ürünlere rahatlıkla ve <br/> kolay bir şekilde satın alabilirsiniz<br/></p>
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
	</section>
    )
  }
}

export default Slider;
