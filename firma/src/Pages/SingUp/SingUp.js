import React, { Component } from 'react'
import './SingUp.css';
import logo from '../../Assets/logo.png';
import {Link as LinkRouter} from 'react-router-dom';
import axios from 'axios';
export class SingUp extends Component {
  constructor(props) {

    super(props);

    this.state = {
      kullanici_adi:"",
      firma_adi:"",
      firma_mail:"",
      firma_tel1:"",
      sifre:""

    };
    this.handleKullaniciAdi=this.handleKullaniciAdi.bind(this);
    this.handleFirmaAdi=this.handleFirmaAdi.bind(this);
    this.handleFirmaMail=this.handleFirmaMail.bind(this);
    this.handleFirmaTel=this.handleFirmaTel.bind(this);
    this.handleSifre=this.handleSifre.bind(this);
  }
   handleKullaniciAdi = (e) => {
    e.preventDefault();
    this.setState({ kullanici_adi: e.target.value });
  
  };
  handleFirmaAdi = (e) => {
    e.preventDefault();
    this.setState({ firma_adi: e.target.value });
  
  };

  handleFirmaMail = (e) => {
    e.preventDefault();
    this.setState({ firma_mail: e.target.value });
  
  };

  handleFirmaTel = (e) => {
    e.preventDefault();
    this.setState({ firma_tel1: e.target.value });
  
  };
  handleSifre = (e) => {
    e.preventDefault();
    this.setState({ sifre: e.target.value });
  
  };


  handleSubmit = (e) => {
    e.preventDefault();
    let data={
      kullanici_adi:this.state.kullanici_adi,
      firma_adi:this.state.firma_adi,
      firma_mail:this.state.firma_mail,
      firma_tel1:this.state.firma_tel1,
      sifre:this.state.sifre
    };

    axios
      .post(`https://localhost:44363/firma/register`, data)
      .then((res) => {
        alert("kullanici eklendi");
      });
      console.log(data)
  };
  render() {
    const{ kullanici_adi,firma_adi,firma_mail,firma_tel1,sifre}=this.state;
    return (
      <div className='containerSingup'>
      <section id="section-wrapperSingUp">
        <div className="box-wrapperSingUp">
          <div className="form-boxSingUp">
            <form onSubmit={this.handleSubmit}>
              <img className='etiyoLogoSingUp' src={logo} />
              <div className="form-fieldsSingUp">
              <div className="form-group">
                  <input onChange={this.handleKullaniciAdi} type="text" className="username" value={kullanici_adi} placeholder="Kullanıcı Adı" />
                </div>
                
                
                <div className="form-group">
                  <input onChange={this.handleFirmaAdi} type="text" className="username" value={firma_adi} placeholder="Firma Adı" />
                </div>
                <div className="form-group">
                  <input onChange={this.handleFirmaMail} type="text" className="username" value={firma_mail} placeholder="Firma Mail" />
                </div>
                <div className="form-group">
                  <input onChange={this.handleFirmaTel} type="text" className="username" value={firma_tel1} placeholder="Firma Telefon" />
                </div>
                <div className="form-group">
                  <input onChange={this.handleSifre} type="password" className="user-pass" value={sifre} placeholder="Şifre" />
                </div>

              </div>
              <input type="submit" value="Sign Up" className="submit-buttonSingUp" />
            </form>
            <p className="signin-here">Do you want to login? <LinkRouter to="/login">Sing In</LinkRouter></p>

          </div>

        </div>
      </section>
    </div>
    )
  }
}

export default SingUp