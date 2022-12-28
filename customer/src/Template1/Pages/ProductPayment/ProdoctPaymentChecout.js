import React, { Component } from 'react'

class ProdoctPaymentChecout extends Component {
  render() {
    return (
        <div className="col-lg-4 col-12">
        <div className="order-details">
            <div className="single-widget">
                <h2>Ürün Toplamı</h2>
                <div className="content">
                    <ul>
                        <li>Ara Toplam<span>330 TL</span></li>
                        <li>(+) Kargo<span>10 TL</span></li>
                        <li className="last">Toplam<span>340 TL</span></li>
                    </ul>
                </div>
            </div>
            <div className="single-widget">
                <h2>Ödemeler</h2>
                <div className="content">
                    <div className="checkbox">
                        <label className="checkbox-inline" for="1"><input name="updates" id="1" type="checkbox" /> Kredi kartı ödeme</label>
                        <label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Kapıda ödeme</label>

                    </div>
                </div>
            </div>
           
            <div className="single-widget get-button">
                <div className="content">
                    <div className="button">
                        <a href="#" className="btn">Ödemeyi Tamamla</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default ProdoctPaymentChecout