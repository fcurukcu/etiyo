import React, { Component } from 'react'

class Login extends Component {
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
                          <li><a href="index1.html">Home<i className="fa fa-arrow-right"></i></a></li>
                          <li className="active"><a href="blog-single.html">Login</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
      </div>
      <div className='container' style={{textAlign: "center",paddingTop: "37px"}}>
                      <h3>------ Login ------</h3>
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
                              <form className="form" method="post" action="mail/mail.php">
                                  <div className="row">
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>User Name<span>*</span></label>
                                              <input name="name" type="text" placeholder=""/>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-12">
                                          <div className="form-group">
                                              <label>Password<span>*</span></label>
                                              <input name="subject" type="text" placeholder=""/>
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
