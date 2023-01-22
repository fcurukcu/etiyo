import React, { Component } from 'react'
import OneProduct from '../../Components/Product/OneProduct'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Categories from '../../Components/Categories/Categories';
import './Products.css';
class Products extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }

    state = {
        product: null,
        category: null,
        productPageName:'Ürünler'
    }

    componentDidMount() {
        const url = window.location.pathname.split('/');
        const urlParca = url.length == 3 ? url[2] : null;
        this.setState({ category: urlParca });
       
        this.setState({ productPageName:  this.productCategoryNameFind(urlParca) });

        const firmId = localStorage.getItem('firmId');
        axios.get(`https://localhost:44363/firmaurun/liste/` + firmId)
            .then(res => {
                const product = res.data.response;
                this.setState({ product: product });
            })
    }

    productCategoryNameFind(id)
    {
        let name='Ürünler';
        if(this.props.kategoriler)
        {
            this.props.kategoriler.forEach(kat => {
               
                if(+kat.id===+id)
                {
                    name=name+' > '+kat.adi;
                }
                else
                {
                    kat.oneKategori.forEach(oneKategori => {
                        
                        if(+oneKategori.id===+id)
                        {
                            name=name+' > '+kat.adi+' > '+oneKategori.adi;
                        }
                        else
                        {
                            oneKategori.twoKategori.forEach(twoKategori => {
                                if(+twoKategori.id===+id)
                                {
                                    name=name+' > '+kat.adi+' > '+oneKategori.adi+' > '+twoKategori.adi;
                                }
                            });
                        }
                    });
                }
            });
        }

        return name;
    }

    render() {

        let baslik=this.productCategoryNameFind(this.state.category);
        let cat = this.state.category;
        const categories = this.props.kategoriler;
        return (
            <>
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bread-inner">
                                    <ul className="bread-list">
                                        <li><a href="#">Anasayfa<i className="fa fa-arrow-right"></i></a></li>
                                        <li className="active"><a href="#">{baslik}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container' style={{ textAlign: "center", paddingTop: "37px" }}>
                    <h3>------ Ürünler ------</h3>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <section id="contact-us" className="contact-us section">
                            <div className="container">
                                <h3 className="cat-heading-pro">Kategoriler</h3>
                                <ul className="main-category main-category-pro" >
                                    {categories ? categories.map((categori, i) => {
                                        return (
                                            <li key={i}><Link onClick={() => this.urlChange("/products/" + categori.id)} to={"/products/" + categori.id}>{categori.adi}</Link>
                                                <ul className="sub-category-pro">
                                                    {categori.oneKategori.map((oneKategori, m) => {
                                                        return (
                                                            <li key={m}><Link onClick={() => this.urlChange("/products/" + oneKategori.id)} to={"/products/" + oneKategori.id}>{oneKategori.adi} </Link>
                                                                <ul className="sub-category-pro">
                                                                    {oneKategori.twoKategori.map((twoKategori, k) => {
                                                                        return (<li key={k}><Link onClick={() => this.urlChange("/products/" + twoKategori.id)} to={"/products/" + twoKategori.id}>{twoKategori.adi}</Link></li>)
                                                                    }
                                                                    )
                                                                    }

                                                                </ul>
                                                            </li>
                                                        )
                                                    })
                                                    }

                                                </ul>
                                            </li>
                                        )
                                    }) : null}

                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className='col-md-9'>
                        <section id="contact-us" className="contact-us section">
                            <div className="container">
                                <div className="contact-head">
                                    <div className="row">
                                        {this.state.product ? this.state.product.map((pro, i) => {
                                            if (cat == null || pro.mainKategori == cat || pro.oneKategori == cat || pro.firmaUrun.kategori_id == cat) {

                                                return <OneProduct key={i} product={pro} />;
                                            }
                                        }
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </>
        )
    }
}
export default Products;
