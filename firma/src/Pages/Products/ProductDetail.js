import React, { Component } from 'react'

class ProductDetail extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className="mt-3">
                      
        <p className="text-muted mb-2 font-13">Ürün Adı:{this.props.detay.props.firmaUrun.adi}</p>
        <p className="text-muted mb-2 font-13"><strong>Ürün Kodu: {this.props.detay.props.firmaUrun.urun_kodu}</strong> <span className="ms-2"></span></p>

        <p className="text-muted mb-2 font-13"><strong>Kategorisi: {this.props.detay.props.kategori_adi}</strong><span className="ms-2"></span></p>

        <p className="text-muted mb-2 font-13"><strong>Ürün Açıklama: {this.props.detay.props.firmaUrun.urun_aciklama}</strong> <span className="ms-2"></span></p>
        <p className="text-muted mb-2 font-13"><strong>Eklenme Tarihi: {this.props.detay.props.firmaUrun.ekleme_tarihi}</strong> <span className="ms-2"></span></p>
        <p className="text-muted mb-2 font-13"><strong>Fiyatı: {this.props.detay.props.firmaUrun.fiyat}</strong> <span className="ms-2"></span></p>
        <p className="text-muted mb-2 font-13"><strong>Ürün Tip Kodu: {this.props.detay.props.urun_tip_kodu}</strong> <span className="ms-2"></span></p>
        <p className="text-muted mb-2 font-13">Ürün Resmi:</p>
        <img style={{width:'70%'}} src={require(`../../../../backend/images/Products/${this.props.detay.props.firmaUrun.resim}`)}/> 
      
    </div>
   
    )
  }
}
export default ProductDetail;
