import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { getUser } from '../../Utils/Common';
import axios from 'axios';
class ProductsAdd extends Component {
  constructor(props) {

    super(props);

    this.state = {
      
      urun_kategori_id:"",
      urun_adi:"",
      urun_kodu:"",
      fiyat:"",
      urun_aciklama:"",
      urun_tip_kodu:"",
      
      urun_resim:""


    };
    this.handleKategoriId=this.handleKategoriId.bind(this);
    this.handleUrunAdi=this.handleUrunAdi.bind(this);
    this.handleUrunKodu=this.handleUrunKodu.bind(this);
    this.handleUrunFiyati=this.handleUrunFiyati.bind(this);
    this.handleUrunAciklama=this.handleUrunAciklama.bind(this);
    this.handleUrunTipKodu=this.handleUrunTipKodu.bind(this);
    this.handleUrunResim=this.handleUrunResim.bind(this);
  }
  handleKategoriId = (e) => {
    e.preventDefault();
    this.setState({ urun_kategori_id: e.target.value });
  
  };
  handleUrunAdi = (e) => {
    e.preventDefault();
    this.setState({ urun_adi: e.target.value });
  
  };
  handleUrunKodu = (e) => {
    e.preventDefault();
    this.setState({ urun_kodu: e.target.value });
  
  };
  handleUrunFiyati = (e) => {
    e.preventDefault();
    this.setState({ fiyat: e.target.value });
  
  };
  handleUrunAciklama = (e) => {
    e.preventDefault();
    this.setState({ urun_aciklama: e.target.value });
  
  };
  handleUrunTipKodu = (e) => {
    e.preventDefault();
    this.setState({ urun_tip_kodu: e.target.value });
  
  };
  handleUrunResim = (e) => {
    e.preventDefault();
    this.setState({ urun_resim: e.target.value });
  
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data={
      firma_id:getUser(),
      ozellikler:[3,7],
      urun_kategori_id:this.state.urun_kategori_id,
      urun_adi:this.state.urun_adi,
      urun_kodu:this.state.urun_kodu,
      fiyat:this.state.fiyat,
      urun_aciklama:this.state.urun_aciklama,
      urun_tip_kodu:this.state.urun_tip_kodu,
      urun_resim:this.state.urun_resim
    };
    axios
    .post(`https://localhost:44363/firmaurun/ekle`, data)
    .then((res) => {
      alert("kullanici eklendi");
    });
    console.log(data)
  }
  render() {
    const{ urun_kategori_id,urun_adi,urun_kodu,fiyat,urun_aciklama,urun_tip_kodu,urun_resim}=this.state;
    console.log("kategori",this.props.categories);
    const kategorim=this.props.categories;
    return (
      <div>
        <h3 style={{textAlign:"center"}}>Ürün Ekle</h3>
       <Form onSubmit={this.handleSubmit} className="mt-3" style={{paddingTop:"10px"}}>
          
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Adı:</span>
                <Form.Control
                    
                placeholder="Ürün Adı"
                name="adi"

               value={urun_adi}
               onChange={this.handleUrunAdi}
                required 
               
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kategorisi:</span>
            <Form.Select value={urun_kategori_id} onChange={this.handleKategoriId}>
              
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


          
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kodu:</span>
                <Form.Control
                type="text"
                placeholder="Ürün Kodu"
                name="urun_kodu"
                value={urun_kodu}
                onChange={this.handleUrunKodu}
                required 
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Fiyatı:</span>
                <Form.Control
                placeholder="Fiyat"
                type="text"
                name="fiyat"
                value={fiyat}
                onChange={this.handleUrunFiyati}
                required 
                />
            </Form.Group>

            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Açıklaması:</span>
                <Form.Control
                as="textarea"
                placeholder="Ürün Açıklama"
                name="urun_aciklama"
                value={urun_aciklama}
                onChange={this.handleUrunAciklama}
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
                value={urun_tip_kodu}
                onChange={this.handleUrunTipKodu}
                required 
                />
            </Form.Group>
            
     
         <Form.Group style={{marginTop:"10px"}}>
         <span>Ürün resmi Seç:</span>
                <Form.Control    
         style={{height:"30px"}}
                type="file"
                name='urun_resim'
                value={urun_resim}
                onChange={this.handleUrunResim}
                />    
         </Form.Group>
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>Ürün Ekle</Button>
      </Form>
      </div>

    )
  }
}
export default ProductsAdd;
