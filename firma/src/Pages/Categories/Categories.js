import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Categories.css';

class Categories extends Component {
    render() {
        return (
            <>
                <div className='row' style={{ marginBottom: "28px" }}></div>
                <div className='row' >
                <div className='col-md-12' >
                    <h3 className="font-weight-bold py-3 mb-0 head">Ürün Kategori Listesi</h3>
                   <span className='head-span'>
                   <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#"><i className="feather icon-home"></i></Link></li>
                        <li className="breadcrumb-item"><Link to="#">Ürün Kategori Listesi</Link></li>
                        {/* <li className="breadcrumb-item active">Transkript Listesi</li> */}
                    </ol>
                   </span>
                </div>
                </div>

                <div className="card mt-1">
                    <div className="card-header">
                        <h5>Bilgi</h5>
                    </div>
                    <div className="card-body">
                        <p>Burada siteye üye olan firma listesi yer almaktadır.Eğer firma ödemede geciktirme yaptıysa "web sitesi kaldır" butonu ile sitesi pasif edilebilir.
                            "Web sitesine git" butonu ile de firmanın sistemine girip müşterinin sayfasını görebilir. </p>
                    </div>
                </div>
                <div className="card  mt-3">
                    <div className="card-header">
                        <h5>Ürün Kategorileri</h5>
                    </div>
                    <div className='treex well'>
                    <div className='col-md-12 mainCategory'> 
                    <Link className="btn btn-success btn-sm" ><span style={{color:"#fff",border:"none"}}>Ana Kategori Ekle</span></Link>
                           </div>
                    <ul>
                        <li className="parent_li">
                            <span id="mainKategory" title="Kadın"><i style={{marginRight:"10px"}} className="fa fa-folder"></i> Kadın</span>
                            <Link className="btn btn-warning btn-sm" ><i style={{color:"#fff"}} className="fa fa-pen"></i></Link>
                            <Link className="btn btn-danger btn-sm" ><i style={{color:"#fff"}} className="fa fa-trash"></i></Link>
                            <Link className="btn btn-success btn-sm" ><span className='subCategorySpan'>Alt Kategori Ekle</span></Link>
                            <ul>

                                {/* <li style={{display: "none"}} className="parent_li"> */}
                                <li className="parent_li">
                                    <span id="subCategory" title="Elbise">
                                        <i style={{marginRight:"10px"}} className="fa fa-folder-open">
                                        </i>Elbise
                                    </span>
                                    <Link className="btn btn-warning btn-sm" ><i style={{color:"#fff"}} className="fa fa-pen"></i></Link>
                                    <Link className="btn btn-danger btn-sm" ><i style={{color:"#fff"}} className="fa fa-trash"></i></Link>
                                    <Link className="btn btn-success btn-sm" ><span className='subCategorySpan'>Alt Kategori Ekle</span></Link>
                                    <ul>
                                    {/* <li style={{display: "none"}}> */}
                                        <li>
                                            <span id="qruvazeElbise"><i style={{marginRight:"10px"}}> </i>Kruvaze Elbise
                                            </span>
                                            <Link className="btn btn-warning btn-sm" ><i style={{color:"#fff"}} className="fa fa-pen"></i></Link>
                                            <Link className="btn btn-danger btn-sm" ><i style={{color:"#fff"}} className="fa fa-trash"></i></Link>
                                            <Link className="btn btn-info btn-sm" ><span className='subCategorySpan'>Özellik Ekle</span></Link>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                </div>
            </>
        )
    }
}
export default Categories;
