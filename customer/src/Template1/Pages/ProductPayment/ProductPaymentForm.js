import React, { Component } from 'react'

class ProductPaymentForm extends Component {
  render() {
    return (
        <div className="col-lg-8 col-12">
        <div className="checkout-form">
            <h2>Ödeme İşlemleriniz Kolayca Gerçekleştirebilirsiniz.</h2>
            <p>Daha hızlı ödeme yapmak için lütfen kayıt olun</p>
            <form className="form" method="post" action="#">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Adınız:<span>*</span></label>
                            <input type="text" name="name" placeholder="" required="required" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Soyadınız<span>*</span></label>
                            <input type="text" name="name" placeholder="" required="required" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Email Adresi<span>*</span></label>
                            <input type="email" name="email" placeholder="" required="required" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Telefon Numarası<span>*</span></label>
                            <input type="number" name="number" placeholder="" required="required" />
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Adres<span>*</span></label>
                            <input type="text" name="address" placeholder="" required="required" />
                        </div>
                    </div>



                </div>
            </form>
        </div>
    </div>
    )
  }
}
export default ProductPaymentForm