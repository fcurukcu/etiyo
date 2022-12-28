import React, { Component } from 'react'

class Categories extends Component {
    constructor(props) {
        super(props);
    }

    urlChange(row) {
        this.props.urlFonk(row);
    }
    render() {
        return (
            <div className="col-lg-3">
                <div className="all-category">
                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>Kategoriler</h3>
                    <ul className="main-category">
                        <li><a href="#">Kadın <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <ul className="sub-category">
                                <li><a href="#">Aksesuar <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                <ul className="sub-sub-category">
                                        <li><a href="#">Kolye</a></li>
                                        <li><a href="#">Saat</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Kıyafet <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                <ul className="sub-sub-category">
                                        <li><a href="#">elbise</a></li>
                                        <li><a href="#">tişört</a></li>
                                    </ul>
                                </li><li><a href="#">Ayakkabı <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                <ul className="sub-sub-category">
                                        <li><a href="#">Spor ayakkabı</a></li>
                                        <li><a href="#">Sandelet</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Erkek <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <ul className="sub-category">
                                <li><a href="#">Aksesuar <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                <ul className="sub-sub-category">
                                        <li><a href="#">Kolye</a></li>
                                        <li><a href="#">Saat</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Kıyafet <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                <ul className="sub-sub-category">
                                        <li><a href="#">elbise</a></li>
                                        <li><a href="#">tişört</a></li>
                                    </ul>
                                </li><li><a href="#">Ayakkabı <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                <ul className="sub-sub-category">
                                        <li><a href="#">Spor ayakkabı</a></li>
                                        <li><a href="#">Sandelet</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                     
                    </ul>
                </div>
            </div>
        )
    }
}
export default Categories;