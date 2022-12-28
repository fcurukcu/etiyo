import React, { Component } from 'react'
import ProdoctPaymentChecout from './ProdoctPaymentChecout';
import ProductPaymentForm from './ProductPaymentForm';

class ProductPayment extends Component {
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
										<li><a href="index1.html">Anasayfa<i className="fa fa-arrow-right"></i></a></li>
										<li className="active"><a href="blog-single.html">Ödeme</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="shop checkout section">
					<div className="container">
						<div className="row">
							<ProductPaymentForm/>
							<ProdoctPaymentChecout/>
						</div>
					</div>
				</section>
			</>
		)
	}
}
export default ProductPayment;
