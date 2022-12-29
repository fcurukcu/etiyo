import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
    render() {
        const categories = this.props.kategoriler;
        return (
            <div className="col-lg-3">
                <div className="all-category">
                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>Kategoriler</h3>
                    <ul className="main-category">
                        {categories?categories.map((categori, i) => {
                            return (
                                <li key={i}><Link onClick={()=>this.urlChange("/products/" + categori.id)} to={"/products/" + categori.id}>{categori.adi} <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                    <ul className="sub-category">
                                        {categori.oneKategori.map((oneKategori, m) => {
                                            return (
                                                <li key={m}><Link onClick={()=>this.urlChange("/products/" + oneKategori.id)} to={"/products/" + oneKategori.id}>{oneKategori.adi} <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                                    <ul className="sub-sub-category">
                                                        {oneKategori.twoKategori.map((twoKategori, k) => {
                                                            return (<li key={k}><Link  onClick={()=>this.urlChange("/products/" + twoKategori.id)} to={"/products/" + twoKategori.id}>{twoKategori.adi}</Link></li>)
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
                        }):null}

                    </ul>
                </div>
            </div>
        )
    }
}
export default Categories;