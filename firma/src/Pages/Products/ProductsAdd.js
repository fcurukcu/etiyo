import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
class ProductsAdd extends Component {
  render() {

    console.log("kategori",this.props.categories);
    const kategorim=this.props.categories;
    return (
      <div>
        <h3 style={{textAlign:"center"}}>Ürün Ekle</h3>
       <Form className="mt-3" style={{paddingTop:"10px"}}>
           <Form.Group style={{display:"none"}}>
           
                <Form.Control
                type="text"
                placeholder="Firma id"
                name="firma_id"
                
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Adı:</span>
                <Form.Control
                    
              
                placeholder="Ürün Adı"
                name="adi"
              
                required 
               
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kategorisi:</span>
            <Form.Select>
              {/* {<option key={0} value={0}>Seçiniz</option>} */}
              {
                kategorim?
                kategorim.map((kategori,i)=>{
                  if(+kategori.oneKategori.length===0)
                  {
                    return (<option key={i} value={kategori.id}>{kategori.adi}</option>);
                  }
                  else
                  {
                    return kategori.oneKategori.map((oneCategori,k)=>{
                      
                      if(+oneCategori.twoKategori.length===0)
                        {
                          return (<option key={k} value={oneCategori.id}>{oneCategori.adi}</option>);
                        }
                        else
                        {
                          return oneCategori.twoKategori.map((twoCategori,m)=>{
                            return (<option key={m} value={twoCategori.id}>{twoCategori.adi}</option>);
                          });
                        }
                    });
                  }
                  
                })
                  :null
                  
              }
            
            </Form.Select>


                {/* <Form.Control
                    
              
                placeholder="Ürün kategorisi"
                name="urun_kategori"
              
                required 
               
                /> */}
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kodu:</span>
                <Form.Control
                type="text"
                placeholder="Ürün Kodu"
                name="urun_kodu"
                
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Fiyatı:</span>
                <Form.Control
                placeholder="Fiyat"
                type="text"
                name="fiyat"
           
                required 
                />
            </Form.Group>

            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Açıklaması:</span>
                <Form.Control
                as="textarea"
                placeholder="Ürün Açıklama"
                name="urun_aciklama"
        
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
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>Ürün Ekle</Button>
      </Form>
      </div>

    )
  }
}
export default ProductsAdd;
