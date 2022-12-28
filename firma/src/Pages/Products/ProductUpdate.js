import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
class ProductUpdate extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div>
        <h3 style={{textAlign:"center"}}>Ürün Düzenle</h3>
       <Form className="mt-3" style={{paddingTop:"10px"}}>
           <Form.Group style={{display:"none"}}>
           
                <Form.Control
                type="text"
                placeholder="Firma id"
                name="firma_id"
                value={this.props.detay.props.firmaUrun.firma_id}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Adı:</span>
                <Form.Control
                    
              
                placeholder="Ürün Adı"
                name="adi"
                value={this.props.detay.props.firmaUrun.adi}
                required 
               
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kategorisi:</span>
                <Form.Control
                    
              
                placeholder="Ürün kategorisi"
                name="urun_kategori"
                value={this.props.detay.props.kategori_adi}
                required 
               
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kodu:</span>
                <Form.Control
                type="text"
                placeholder="Ürün Kodu"
                name="urun_kodu"
                value={this.props.detay.props.firmaUrun.urun_kodu}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Fiyatı:</span>
                <Form.Control
                placeholder="Fiyat"
                type="text"
                name="fiyat"
                value={this.props.detay.props.firmaUrun.fiyat}
                required 
                />
            </Form.Group>

            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Açıklaması:</span>
                <Form.Control
                as="textarea"
                placeholder="Ürün Açıklama"
                name="urun_aciklama"
                value={this.props.detay.props.firmaUrun.urun_aciklama}
                required 
                rows={3} 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Tip Kodu:</span>
                <Form.Control
                
                type="text"
                placeholder="Ürün Tip Kodu"
                name="urun_tip_kodu"
                value={this.props.detay.props.urun_tip_kodu}
                required 
                />
            </Form.Group>
            
     
         <Form.Group style={{marginTop:"10px"}}>
         <span>Ürün resmi Seç:</span>
                <Form.Control    
         style={{height:"30px"}}
                type="file"
                
                />    
         </Form.Group>
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>Ürün Düzenle</Button>
      </Form>
      </div>
    )
  }
}
export default ProductUpdate;
