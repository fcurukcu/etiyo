import React, { Component } from 'react';
import axios from "axios";
class KayitOl extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            kullanici_adi:"",
            sifre:"",
           
            adi:"",
            soyadi:"",
            mail:"",
            telefon:"",
            address:""
      
          };
          this.handleKullaniciAdi=this.handleKullaniciAdi.bind(this);
          this.handleSifre=this.handleSifre.bind(this);
          this.handleAdi=this.handleAdi.bind(this);
          this.handleSoyadi=this.handleSoyadi.bind(this);
          this.handleMail=this.handleMail.bind(this);
          this.handleTelefon=this.handleTelefon.bind(this);
          this.handleAddress=this.handleAddress.bind(this);
    }
    handleKullaniciAdi = (e) => {
        e.preventDefault();
        this.setState({ kullanici_adi: e.target.value });
      
      };
      handleSifre = (e) => {
        e.preventDefault();
        this.setState({ sifre: e.target.value });
      
      };
      handleAdi= (e) => {
        e.preventDefault();
        this.setState({ adi: e.target.value });
      
      };
      handleSoyadi= (e) => {
        e.preventDefault();
        this.setState({ soyadi: e.target.value });
      
      };
      handleMail= (e) => {
        e.preventDefault();
        this.setState({ mail: e.target.value });
      
      };
      handleTelefon= (e) => {
        e.preventDefault();
        this.setState({ telefon: e.target.value });
      
      };
      handleAddress= (e) => {
        e.preventDefault();
        this.setState({ address: e.target.value });
      
      };

      handleSubmit = (e) => {
        e.preventDefault();
       
        let data={
          kullanici_adi:this.state.kullanici_adi,
          sifre:this.state.sifre,
          firma_id:localStorage.getItem('firmId'),
          adi:this.state.adi,
          soyadi:this.state.soyadi,
          mail:this.state.mail,
          telefon:this.state.telefon,
          address:this.state.address,
        };
        axios({
            method: "post",
            url: "https://localhost:44363/musteri/register",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              alert("Kayıt işlemi başarılı",response)
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
   
    
      };
    urlChange(row) {
        this.props.urlFonk(row);
    }
  render() {
    const{ kullanici_adi,sifre,adi,soyadi,mail,telefon,address}=this.state;
    return (
        <>
        <div className="breadcrumbs">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="bread-inner">
                      <ul className="bread-list">
                          <li><a href="#">Anasayfa<i className="fa fa-arrow-right"></i></a></li>
                          <li className="active"><a href="#">Kayıt Ol</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
      </div>
      <div className='container' style={{textAlign: "center",paddingTop: "37px"}}>
                      <h3>------ Kayıt Ol ------</h3>
                  </div>
      <section id="contact-us" className="contact-us section">
      <div className="container">
              <div className="contact-head">
                  <div className="row">
                      <div className="col-lg-12 col-12">
                          <div className="form-main">
                              <div className="title">
                                  <h3>Tüm bilgilerinizi eksiksiz bir şekilde doldurunuz</h3>
                              </div>
                              <form onSubmit={this.handleSubmit} className="form">
                                  <div className="row">
                                  <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Adınız<span>*</span></label>
                                              <input name="adi" type="text" placeholder="" value={adi} onChange={this.handleAdi}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Soyadınız<span>*</span></label>
                                              <input name="soyadi" type="text" placeholder="" value={soyadi} onChange={this.handleSoyadi}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Kullanıcı Adı<span>*</span></label>
                                              <input name="kullaniciadi" type="text" placeholder="" value={kullanici_adi} onChange={this.handleKullaniciAdi}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Şifre<span>*</span></label>
                                              <input name="sifre" type="text" placeholder="" value={sifre} onChange={this.handleSifre}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Telefon Numarası(Başında 0 olmadan yazınız)<span>*</span></label>
                                              <input name="tel" type="number" placeholder="" value={telefon} onChange={this.handleTelefon}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>E-Mail Adresiniz<span>*</span></label>
                                              <input name="mail" type="email" placeholder="" value={mail} onChange={this.handleMail}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <label>Adres<span>*</span></label>
                                              <input name="adres" type="text" placeholder="" value={address} onChange={this.handleAddress}/>
                                          </div>
                                      </div>
                                    
                                      <div className="col-12">
											<div className="form-group button">
												<button type="submit" className="btn ">Kayıt Ol</button>
											</div>
										</div>
                                  </div>

                              </form>
                          </div>
                      </div>
                   
                  </div>
              </div>
          </div>
      </section>
    </>
    )
  }
}
export default KayitOl;
