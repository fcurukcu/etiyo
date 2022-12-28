import React, { Component } from 'react'
import { Link } from 'react-router-dom/dist'

export default class Basket extends Component {
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
							<li className="active"><a href="#">Siparişlerim</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className='container' style={{textAlign: "center",paddingTop: "37px"}}>
                        <h3>------ Siparişlerim ------</h3>
                    </div>
    <div className="shopping-cart section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<table className="table shopping-summery">
						<thead>
							<tr className="main-hading">
								<th>ÜRÜN</th>
								<th>ADI</th>
								<th className="text-center">FİYATI</th>
								<th className="text-center">MİKTAR</th>
								<th className="text-center">TOPLAM</th> 
								<th className="text-center"><i className="ti-trash remove-icon"></i></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#"/></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Kadın Elbise</a></p>
									<p className="product-des">Günlük rahat elbisedir.</p>
								</td>
								<td className="price" data-title="Price"><span>110 TL</span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
												<i className="fa fa-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[1]" className="input-number"  data-min="1" data-max="100" />
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
												<i className="fa fa-plus"></i>
											</button>
										</div>
									</div>
								</td>
								<td className="total-amount" data-title="Total"><span>220.88 TL</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="fa fa-trash"></i></a></td>
							</tr>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#"/></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Kadın Kazak</a></p>
									<p className="product-des">100 % pamuklu rahat ve şık kadın kazağı</p>
								</td>
								<td className="price" data-title="Price"><span>110.00 TL</span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[2]">
												<i className="fa fa-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[2]" className="input-number"  data-min="1" data-max="100" />
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[2]">
												<i className="fa fa-plus"></i>
											</button>
										</div>
									</div>
									
								</td>
								<td className="total-amount" data-title="Total"><span>220.88 TL</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="fa fa-trash"></i></a></td>
							</tr>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#"/></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Kadın Mont</a></p>
									<p className="product-des">İçi pamuklu dışı deri mont.</p>
								</td>
								<td className="price" data-title="Price"><span>110.00 TL</span></td>
								<td className="qty" data-title="Qty">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[3]">
												<i className="fa fa-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[3]" className="input-number"  data-min="1" data-max="100" />
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[3]">
												<i className="fa fa-plus"></i>
											</button>
										</div>
									</div>
								</td>
								<td className="total-amount" data-title="Total"><span>220.88 TL</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="fa fa-trash"></i></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="total-amount">
						<div className="row">
							<div className="col-lg-8 col-md-5 col-12">
								
							</div>
							<div className="col-lg-4 col-md-7 col-12">
								<div className="right">
									<ul>
										<li>Sepet Ara Toplamı<span>330.00 TL</span></li>
										<li>Kargo<span>Bedava</span></li>
										<li>Kazıcınız<span>20.00 TL</span></li>
										<li className="last">Öde<span>310.00 TL</span></li>
									</ul>
									<div className="button5">
										<Link onClick={()=>this.urlChange('/product-payment')} to='/product-payment' className="btn">Ödeme</Link>
										<Link onClick={()=>this.urlChange('/products')} to='/products' className="btn">Alışverişe devam</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

      </>
    )
  }
}
