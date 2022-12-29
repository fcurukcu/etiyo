import React, { Component } from 'react'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Image/logo.png';
import Categories from '../Categories/Categories';
import axios from 'axios';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }

    state={
        category:null
    }
  
    render() {
        console.log(this.props.url);

        console.log(this.props.kategoriler);
        return (
            <header className="header shop">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="top-left">
                                    <ul className="list-main">
                                        <li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
                                        <li><i className="ti-email"></i> support@shophub.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-12">
                                <div className="right-content">
                                    <ul className="list-main">
                                        <li><i className="ti-power-off"></i><Link onClick={() => this.urlChange('/login')} to="/login">Giriş Yap</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">
                                <div className="logo">
                                    <Link onClick={() => this.urlChange('/')} to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                                {/* <div className="search-top">
                                    <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
                                    <div className="search-top">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search here..." name="search"/>
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </form>
                                    </div>
                                </div> */}
                                <div className="mobile-nav"></div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="search-bar-top">
                                    <div className="search-bar">
                                    
                                        <form>
                                            <input name="search" placeholder="Ürün Ara" type="search" />
                                            <button className="btnn"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-12">
                                <div className="right-bar">
                                    {/* <div className="sinlge-bar">
								<a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
							</div> */}
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <Link onClick={() => this.urlChange('/basket')} to='/basket' className="single-icon"><i className="fa fa-shopping-basket"></i> <span className="total-count">2</span></Link>
                                        <div className="shopping-item">
                                            <div className="dropdown-cart-header">
                                                <span>2 Ürün</span>
                                                <a href="#">Tüm Ürünleri Görüntüle</a>
                                            </div>
                                            <ul className="shopping-list">
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                    <h4><a href="#">Kadın Elbise</a></h4>
                                                    <p className="quantity">1x - <span className="amount">99.00 TL</span></p>
                                                </li>
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                    <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                                                    <h4><a href="#">Kadın Kazak</a></h4>
                                                    <p className="quantity">1x - <span className="amount">35.00 TL</span></p>
                                                </li>
                                            </ul>
                                            <div className="bottom">
                                                <div className="total">
                                                    <span>Toplam</span>
                                                    <span className="total-amount">134.00 TL</span>
                                                </div>
                                                <Link onClick={() => this.urlChange('/product-payment')} to='/product-payment' className="btn animate">Ödeme Yap</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                {this.props.url === '/' ? <Categories kategoriler={this.props.kategoriler} /> : ''}
                                <div className={this.props.url === '/' ? "col-lg-9 col-12" : "col-lg-12 col-12"}>
                                    <div className="menu-area">
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="navbar-collapse">
                                                <div className="nav-inner">
                                                    <ul className="nav main-menu menu navbar-nav">
                                                        <li className="active"><Link onClick={() => this.urlChange('/')} to='/'>Anasayfa</Link></li>
                                                        <li><Link onClick={() => this.urlChange('/products')} to='/products'>Ürünler</Link></li>
                                                        <li><Link onClick={() => this.urlChange('/contact')} to='/contact'>İletişim</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;