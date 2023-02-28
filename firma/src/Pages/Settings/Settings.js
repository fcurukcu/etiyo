import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Settings.css';
import logo from '../../Assets/logo.png';
import axios from 'axios';
import { getUser } from '../../Utils/Common';

class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            adi:props.props.adi,
            soyadi:props.props.soyadi,
            kullanici_adi:props.props.kullanici_adi,
            firma_iban:props.props.firma_iban,
            firma_adi:props.props.firma_adi,
            adres:props.props.adres,
            firma_adres:props.props.firma_adres,
            firma_domain:props.props.firma_domain,
            firma_tel1:props.props.firma_tel1,
            firma_tel2:props.props.firma_tel2,
            firma_mail:props.props.firma_mail,
            firma_facebook:props.props.firma_facebook,
            firma_instagram:props.props.firma_instagram,
            firma_twitter:props.props.firma_twitter,
            firma_linkedin:props.props.firma_linkedin,
            footeryazi:props.props.footer_yazi,
            firma_logo:undefined,
            firma_slider:undefined
        
       };

       this.handleAdi=this.handleAdi.bind(this);
       this.handleSoyadi=this.handleSoyadi.bind(this);
       this.handleKullanici_adi=this.handleKullanici_adi.bind(this);
       this.handleFirma_iban=this.handleFirma_iban.bind(this);
       this.handleFirma_adi=this.handleFirma_adi.bind(this);
       this.handleFirma_adres=this.handleFirma_adres.bind(this);
       this.handleFirma_domain=this.handleFirma_domain.bind(this);
       this.handleFirma_tel1=this.handleFirma_tel1.bind(this);
       this.handleFirma_tel2=this.handleFirma_tel2.bind(this);
       this.handleFirma_mail=this.handleFirma_mail.bind(this);
       this.handleFirma_facebook=this.handleFirma_facebook.bind(this);
       this.handleFirma_instagram=this.handleFirma_instagram.bind(this);
       this.handleFirma_twitter=this.handleFirma_twitter.bind(this);
       this.handleFirma_linkedin=this.handleFirma_linkedin.bind(this);
       this.handleFooter_yazi=this.handleFooter_yazi.bind(this);
       this.handleFirma_logo=this.handleFirma_logo.bind(this);
       this.handleFirma_slider=this.handleFirma_slider.bind(this);
    }

    handleAdi = (e) => {
        e.preventDefault();
        this.setState({ adi: e.target.value });
      };
      
    handleSoyadi = (e) => {
        e.preventDefault();
        this.setState({ soyadi: e.target.value });
      };
      handleKullanici_adi = (e) => {
        e.preventDefault();
        this.setState({ kullanici_adi: e.target.value });
      };
  
      handleadres = (e) => {
        e.preventDefault();
        this.setState({ adres: e.target.value });
      };
      handleFirma_iban = (e) => {
        e.preventDefault();
        this.setState({ firma_iban: e.target.value });
      };
      handleFirma_adi = (e) => {
        e.preventDefault();
        this.setState({ firma_adi: e.target.value });
      };
      handleFirma_adres = (e) => {
        e.preventDefault();
        this.setState({ firma_adres: e.target.value });
      };
      handleFirma_domain = (e) => {
        e.preventDefault();
        this.setState({ firma_domain: e.target.value });
      };
      handleFirma_tel1 = (e) => {
        e.preventDefault();
        this.setState({ firma_tel1: e.target.value });
      };
      handleFirma_tel2 = (e) => {
        e.preventDefault();
        this.setState({ firma_tel2: e.target.value });
      };
      handleFirma_mail = (e) => {
        e.preventDefault();
        this.setState({ firma_mail: e.target.value });
      };
      handleFirma_facebook = (e) => {
        e.preventDefault();
        this.setState({ firma_facebook: e.target.value });
      };
      handleFirma_instagram = (e) => {
        e.preventDefault();
        this.setState({ firma_instagram: e.target.value });
      };
      handleFirma_twitter = (e) => {
        e.preventDefault();
        this.setState({ firma_twitter: e.target.value });
      };
      handleFirma_linkedin = (e) => {
        e.preventDefault();
        this.setState({ firma_linkedin: e.target.value });
      };
      handleFooter_yazi = (e) => {
        e.preventDefault();
        this.setState({ footeryazi: e.target.value });
      };
      handleFirma_logo = (e) => {
        e.preventDefault();
        this.setState({ firma_logo: e.target.files[0] });
      };
      handleFirma_slider = (e) => {
        e.preventDefault();
        this.setState({ firma_slider:e.target.files[0] });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        let data={
            id:getUser().id,
            adi:this.state.adi,
            soyadi:this.state.soyadi,
            kullanici_adi:this.state.kullanici_adi,
            adres:this.state.adres,
            firma_iban:this.state.firma_iban,
            firma_adi:this.state.firma_adi,
            firma_adres:this.state.firma_adres,
            firma_domain:this.state.firma_domain,
            firma_tel1:this.state.firma_tel1,
            firma_tel2:this.state.firma_tel2,
            firma_mail:this.state.firma_mail,
            firma_facebook:this.state.firma_facebook,
            firma_instagram:this.state.firma_instagram,
            firma_twitter:this.state.firma_twitter,
            firma_linkedin:this.state.firma_linkedin,
            footeryazi:this.state.footeryazi,
            firma_logo:this.state.firma_logo,
            firma_slider:this.state.firma_slider,
        
        };
  
 
        axios({
            method: "post",
            url: "https://localhost:44363/firma/firmabilgileri",
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
 
  render() {
    const{ adi,soyadi,kullanici_adi,firma_adres,firma_iban,firma_adi,adres,firma_domain,firma_tel1,firma_tel2,firma_mail,firma_facebook,firma_instagram,firma_twitter,firma_linkedin,footeryazi}=this.state;
    return (
        <>
            <div className='row' style={{ marginBottom: "28px" }}></div>
            <div className='row' >
                <div className='col-md-12' >
                    <h3 className="font-weight-bold py-3 mb-0 head">Ayarlar</h3>
                    <span className='head-span'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#"><i className="feather icon-home"></i></Link></li>
                            <li className="breadcrumb-item"><Link to="#">Ayarlar</Link></li>
                        </ol>
                    </span>
                </div>
            </div>

            <div className="card mt-1">
                <div className="card-header">
                    <h5>Bilgi</h5>
                </div>
                <div className="card-body">
                    <p>Burada web sitesi için gerekli bilgilerin girilmesi gerekmektedir. </p>
                </div>
            </div>
            <div className="card  mt-3">
                <div className="card-header">
                    <h5>Ayarlar</h5>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className="col-md-12">
                            <form
                            onSubmit={this.handleSubmit}
                                className="screen1form">

                                <div className="settings-form-fields">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label>Adı:</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="user-name" value={adi} placeholder="Adı" onChange={this.handleAdi} />

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Soyadı:</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="user-pass" value={soyadi} placeholder="Soyadı" onChange={this.handleSoyadi}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Kullanıcı Adı:</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="user-name" value={kullanici_adi} placeholder="Kullanıcı Adı" onChange={this.handleKullanici_adi}/>

                                            </div>
                                        </div>
                                      
                                        <div className='col-md-4'>
                                            <label>IBAN No</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="iban-no" value={firma_iban} placeholder="IBAN No" onChange={this.handleFirma_iban}/>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Firma Adı</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-name" value={firma_adi} placeholder="Firma Adı" onChange={this.handleFirma_adi}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Domain Adresi</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="domain-address" value={firma_domain} placeholder="Domain Adresi" onChange={this.handleFirma_domain}/>
                                            </div>
                                        </div>
                                        <div className='col-md-8'>
                                            <label>Firma Adresi</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-address" value={firma_adres} placeholder="Firma Adresi" onChange={this.handleFirma_adres}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Mail Adresi</label>
                                            <div className="settings-form-group">
                                                <input type="email" className="firm-email" value={firma_mail} placeholder="Mail Adresi" onChange={this.handleFirma_mail}/>

                                            </div>
                                        </div>
                                        <div className='col-md-8'>
                                            <label>Adres</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-address" value={adres} placeholder="Firma Adresi" onChange={this.handleadres}/>

                                            </div>
                                        </div>
                                       
                                        <div className='col-md-4'>
                                            <label>Firma Telefon1</label>
                                            <div className="settings-form-group">
                                                <input type="number" className="firm-phone" value={firma_tel1} placeholder="Firma Telefon1" onChange={this.handleFirma_tel1}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Firma Telefon2</label>
                                            <div className="settings-form-group">
                                                <input type="number" className="firm-phone" value={firma_tel2} placeholder="Firma Telefon2" onChange={this.handleFirma_tel2}/>

                                            </div>
                                        </div>
                                    
                                        <div className='col-md-4'>
                                            <label>Facebook Adresiniz</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-email" value={firma_facebook} placeholder="Facebook Adresiniz" onChange={this.handleFirma_facebook}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Twitter Adresiniz</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-email" value={firma_twitter} placeholder="Twitter Adresiniz" onChange={this.handleFirma_twitter}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Linkedin Adresiniz</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-email" value={firma_linkedin} placeholder="Linkedin Adresiniz" onChange={this.handleFirma_linkedin}/>

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>İnstagram Adresiniz</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-email" value={firma_instagram} placeholder="İnstagram Adresiniz" onChange={this.handleFirma_instagram}/>

                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <label>Footer Yazısı</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-email" value={footeryazi} placeholder="Footer Yazısı" onChange={this.handleFooter_yazi}/>

                                            </div>
                                        </div>

                                        
                                        <div className='col-md-12'>
                                            <div className='col-md-6'>
                                                <label>Firma Logosu</label>
                                            
                                                <div className="settings-form-group">
                                                    <input type="file"
                                                         name='file'
                                                accept="image/png, image/jpeg" className="firm-logo" 
                                                onChange={this.handleFirma_logo}/>
                                                
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Slider Resmi</label>
                                          
                                                <div className="settings-form-group">

                                                    <input type="file" name='file' accept="image/png, image/jpeg" className="firm-logo" onChange={this.handleFirma_slider}/>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            <input type="submit" value="Kaydet" className="settings-button" />
                          
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
  }
}


export default Settings;
