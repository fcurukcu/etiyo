import React, { Component } from 'react'

class Contact extends Component {
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
							<li><a href="#">Anasayfa<i className="fa fa-arrow-right"></i></a></li>
							<li className="#"><a href="blog-single.html">İletişim</a></li>
						</ul>
					</div>
				</div>
			</div>
            </div>
        </div>
		<div className='container' style={{textAlign: "center",paddingTop: "37px"}}>
                        <h3>------ İletişim ------</h3>
                    </div>
        <section id="contact-us" className="contact-us section">
		<div className="container">
				<div className="contact-head">
					<div className="row">
						<div className="col-lg-8 col-12">
							<div className="form-main">
								<div className="title">
									<h4>İletişime Geçin</h4>
									<h3>Bize mesaj yazın</h3>
								</div>
								<form className="form" method="post" action="mail/mail.php">
									<div className="row">
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Adınız<span>*</span></label>
												<input name="name" type="text" placeholder=""/>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Soyadınız<span>*</span></label>
												<input name="subject" type="text" placeholder=""/>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Mail Adresiniz<span>*</span></label>
												<input name="email" type="email" placeholder=""/>
											</div>	
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Telefon Numaranız<span>*</span></label>
												<input name="company_name" type="text" placeholder=""/>
											</div>	
										</div>
										<div className="col-12">
											<div className="form-group message">
												<label>Mesajınız<span>*</span></label>
												<textarea name="message" placeholder=""></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group button">
												<button type="submit" className="btn ">Mesajı Gönder</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="single-head">
								<div className="single-info">
									<i className="fa fa-phone"></i>
									<h4 className="title">Bizi Şimdi Ara:</h4>
									<ul>
										<li>+123 456-789-1120</li>
										<li>+522 672-452-1120</li>
									</ul>
								</div>
								<div className="single-info">
									<i className="fa fa-envelope-open"></i>
									<h4 className="title">Email:</h4>
									<ul>
										<li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
										<li><a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a></li>
									</ul>
								</div>
								<div className="single-info">
									<i className="fa fa-location-arrow"></i>
									<h4 className="title">Adresimiz:</h4>
									<ul>
										<li>İzmir Konak Piri reis mah. 123. sk</li>
									</ul>
								</div>
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
export default Contact;