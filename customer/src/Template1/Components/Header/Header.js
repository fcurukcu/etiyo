import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';

import axios from 'axios';
class Header extends Component {
    constructor(props) {
        super(props);

    }

    urlChange(row) {
        this.props.urlFonk(row);
    }

    state = {
        category: null,
        firma: null
    }
    componentDidMount() {

        const firmId = localStorage.getItem('firmId');

        axios.get(`https://localhost:44363/firma/firmabilgilerilistesi/` + firmId)
            .then(res => {
                const firmaBilgileri = res.data.response;

                this.setState({ firma: firmaBilgileri });
            })
    }
    render() {

   
        return (

            <header className="header shop">
                {console.log(this.state.firma)}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="top-left">
                                    {
                                        this.state.firma?this.state.firma.map((post, i) => {
                                            return (
                                                <ul className="list-main" key={i}>
                                                <li><i className="ti-headphone-alt"></i>0{post.firma_tel1}</li>
                                                <li><i className="ti-email"></i>{post.firma_mail}</li>
                                            </ul>
                                            )
                                        }):null
                                    }

                                 
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-12">
                                <div className="right-content">
                                    <ul className="list-main">
                                        <li><i className="ti-power-off"></i><Link onClick={() => this.urlChange('/login')} to="/login">Giriş Yap</Link></li>
                                        <li><i className="ti-power-off"></i><Link onClick={() => this.urlChange('/kayitol')} to="/kayitol">Kayıt Ol</Link></li>
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
                                    {
                                        this.state.firma?this.state.firma.map((post, i) => {
                                            return (
                                                     
                                                <img key={i} style={{width:"100px",height:"40px"}} src={require(`../../../../../backend/images/firmalogo/${post.firma_logo}`)}/> 
                                            )
                                        }):null
                                    }
                                    </Link>
                                </div>

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

                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <Link onClick={() => this.urlChange('/basket')} to='/basket' className="single-icon"><i className="fa fa-shopping-basket"></i> <span className="total-count">2</span></Link>
                                        <div className="shopping-item">
                                            <div className="dropdown-cart-header">
                                                <span>2 Ürün</span>
                                                <Link onClick={() => this.urlChange('/basket')} to='/basket'>Tüm Ürünleri Görüntüle</Link>
                                              
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
                                {this.props.url === '/' || this.props.url.split('/')[1] === 'template' ? <Categories kategoriler={this.props.kategoriler} /> : ''}
                                <div className={this.props.url === '/' || this.props.url.split('/')[1] === 'template' ? "col-lg-9 col-12" : "col-lg-12 col-12"}>
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