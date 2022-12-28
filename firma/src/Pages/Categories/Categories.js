import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getUser } from '../../Utils/Common';
import axios from 'axios';
import './Categories.css';

class Categories extends Component {
    constructor(props) {

        super(props);
    
        this.state = {
          category:[],
          mainKategoriSelect:null,
          oneKategoriSelect:null,
          twoKategoriSelect:null
        };
    
      }

    componentDidMount() {

        const user=getUser();
     
    
        ////  kategorileri liste çekildikten sonra çektim
        axios.get(`https://localhost:44363/urunkategori/liste/`+user.firma_id)
        .then(res => {
          const category = res.data.response;
          this.setState({ category:category });
          
        })
        /////
    
      }

      mainSelectClick=(kategori)=>{
        this.setState({mainKategoriSelect:kategori})
      }
      oneSelectClick=(kategori)=>{
        this.setState({oneKategoriSelect:kategori})
      }
      twoSelectClick=(kategori)=>{
        this.setState({twoKategoriSelect:kategori})
      }

      
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
                        {
                            this.state.category?this.state.category.map((kategori,i)=>{
                                return (
                                    <li className="parent_li" onClick={()=>this.mainSelectClick(kategori)}>
                                    <span id="mainKategory" title={kategori.adi}><i style={{marginRight:"10px"}} className={this.state.mainKategoriSelect===kategori?"fa fa-folder-open":"fa fa-folder"}></i> {kategori.adi}</span>
                                    <Link className="btn btn-warning btn-sm" ><i style={{color:"#fff"}} className="fa fa-pen"></i></Link>
                                    <Link className="btn btn-danger btn-sm" ><i style={{color:"#fff"}} className="fa fa-trash"></i></Link>
                                    <Link className="btn btn-success btn-sm" ><span className='subCategorySpan'>Alt Kategori Ekle</span></Link>
                                    <ul>
        
                                        {/* <li style={{display: "none"}} className="parent_li"> */}
                                     
                                        { kategori.oneKategori.map((oneKategori,k)=>{
                                            return (
                                                <li className="parent_li" style={this.state.mainKategoriSelect===kategori?null:{display:"none"}} onClick={()=>this.oneSelectClick(oneKategori)}>
                                                <span id="subCategory" title={oneKategori.adi}>
                                                    <i style={{marginRight:"10px"}} className={this.state.oneKategoriSelect===oneKategori?"fa fa-folder-open":"fa fa-folder"}>
                                                    </i>{oneKategori.adi}
                                                </span>
                                                <Link className="btn btn-warning btn-sm" ><i style={{color:"#fff"}} className="fa fa-pen"></i></Link>
                                                <Link className="btn btn-danger btn-sm" ><i style={{color:"#fff"}} className="fa fa-trash"></i></Link>
                                                <Link className="btn btn-success btn-sm" ><span className='subCategorySpan'>Alt Kategori Ekle</span></Link>
                                                <ul>
                                                {/* <li style={{display: "none"}}> */}
                                                {
                                                    oneKategori.twoKategori.map((twoKategori,m)=>{
                                                       return <li onClick={()=>this.twoSelectClick(twoKategori)} style={this.state.oneKategoriSelect===oneKategori?null:{display:"none"}}>
                                                        <span id={twoKategori.adi}><i style={{marginRight:"10px"}}> </i>{twoKategori.adi}
                                                        </span>
                                                        <Link className="btn btn-warning btn-sm" ><i style={{color:"#fff"}} className="fa fa-pen"></i></Link>
                                                        <Link className="btn btn-danger btn-sm" ><i style={{color:"#fff"}} className="fa fa-trash"></i></Link>
                                                        <Link className="btn btn-info btn-sm" ><span className='subCategorySpan'>Özellik Ekle</span></Link>
                                                         </li>
                                                    })
                                                }
                                                   
            
                                                </ul>
                                            </li>
                                            )
                                        })
                                        }

                                    </ul>
                                </li>
                                )

                            }):null
                        }
                      
                    </ul>
                </div>
                
                </div>
            </>
        )
    }
}
export default Categories;
