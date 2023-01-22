import React, { Component } from 'react'
import {setUserSession} from '../../../Utils/Common';
import axios from "axios";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:"",
            password:""
          };
          this.handleuserId=this.handleuserId.bind(this);
          this.handlepassword=this.handlepassword.bind(this);
    }
    handleuserId = (e) => {
        e.preventDefault();
        this.setState({ userId: e.target.value });
      
      };
      handlepassword = (e) => {
        e.preventDefault();
        this.setState({ password: e.target.value });
      
      };
    urlChange(row) {
        this.props.urlFonk(row);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data={
            kullanici_adi:this.state.userId,
           sifre:this.state.password,
          };
         
         
          axios({
            method: "post",
            url: "https://localhost:44363/musteri/login",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
            
              alert("Giriş işlemi başarılı",response)
              console.log(response);
            })
            .catch(function (response) {
             
              console.log(response);
            });
       
      
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
                          <li className="active"><a href="#">Giriş yap</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
      </div>
      <div className='container' style={{textAlign: "center",paddingTop: "37px"}}>
                      <h3>------ Giriş Yap ------</h3>
                  </div>
      <section id="contact-us" className="contact-us section">
      <div className="container">
              <div className="contact-head">
                  <div className="row">
                      <div className="col-lg-12 col-12">
                          <div className="form-main">
                              <div className="title">
                                  <h3>Kullanıcı adı ve şifrenizi yazarak giriş yapınız</h3>
                              </div>
                              <form  onSubmit={this.handleSubmit} className="form">
                                  <div className="row">
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Kullanıcı Adı<span>*</span></label>
                                              <input name="name" type="text" placeholder="" value={this.state.userId} onChange={this.handleuserId}/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Şifre<span>*</span></label>
                                              <input name="subject" type="text" placeholder="" value={this.state.password} onChange={this.handlepassword}/>
                                          </div>
                                      </div>
                                    
                                      <div className="col-12">
											<div className="form-group button">
												<button type="submit" className="btn ">Giriş Yap</button>
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
export default Login;
