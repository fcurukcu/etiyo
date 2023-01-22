import React, { Component } from 'react'
import './Product.css';
import OneProduct from './OneProduct';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    state={
        selectId:null
    }
    urlChange(row) {
        this.props.urlFonk(row);
    }
    componentDidMount()
    {
     
        const url = window.location.pathname.split('/');
        const urlParca = url.length == 3 ? url[2] : null;
        this.setState({ selectId: urlParca });
       
    }
    render() {
        const url = window.location.pathname.split('/');
        const urlParca = url.length == 3 ? url[2] : null;
          const bulunanUrun=this.props.product?this.props.product.find((k)=>k.firmaUrun.id===+this.state.selectId):null;
        return (
            // <div className="product-area section">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-12">
            //                 <div className="section-title">
            //                     <h2>{bulunanUrun?bulunanUrun.firmaUrun.adi:""}</h2>
            //                 </div>
            //             </div>
            //         </div>
                   
            //         <div className="row">
            //             <div className="col-12">
            //                 <div className="product-info">
                             
            //                     <div className="tab-content" id="myTabContent">
            //                         <div className="tab-pane fade show active" id="man" role="tabpanel">
            //                             <div className="tab-single">
            //                                 <div className="row">
            //                                     {bulunanUrun?<OneProduct  product={bulunanUrun} />:null}
            //                                     {console.log("bulunan ürün",bulunanUrun)}
                                            
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
                          
            //                 </div>
            //             </div>
                        
            //         </div>
            //     </div>
            // </div>
            <div className='containerLogin'>
            <section id="sectionProductDetial">
          <div className="box-wrapperProductDetial">
              <div className="bg-boxProductDetial">
                  <img src={bulunanUrun?require(`../../../../../backend/images/Products/${bulunanUrun.firmaUrun.resim}`):""} alt=""/>
              </div>
              <div className="form-boxProductDetial" >
              <div  className="screen1formProductDetial">
                    
                      <div className="form-fieldsProductDetial">
                       <h3 style={{fontSize:"20px"}}>Ürün Adı:</h3><span>{bulunanUrun?bulunanUrun.firmaUrun.adi:null}</span> 
                      </div>
                      <div className="form-fieldsProductDetial">
                       <h3 style={{fontSize:"20px"}}>Ürün Kategorisi:</h3><span>{bulunanUrun?bulunanUrun.kategori_adi:null}</span> 
                      </div>
                      <div className="form-fieldsProductDetial">
                       <h3 style={{fontSize:"20px"}}> Ürün Açıklaması:</h3><span>{bulunanUrun?bulunanUrun.firmaUrun.urun_aciklama:null}</span> 
                      </div>
                      <div className="form-fieldsProductDetial">
                       <h3 style={{fontSize:"20px"}}> Ürün Fiyatı:</h3><span> {bulunanUrun?bulunanUrun.firmaUrun.fiyat:null} TL</span> 
                      </div>
                     
                      
                      <input type="submit" value="Satın Al" className="submit-buttonProductDetial" />
                  </div>
              </div>
           
          </div>
      </section>
        </div>
        )
    }
}
export default ProductDetail;
