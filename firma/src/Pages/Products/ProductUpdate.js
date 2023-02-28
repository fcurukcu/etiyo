import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { getUser } from '../../Utils/Common';
import axios from 'axios';
class ProductUpdate extends Component {
  constructor(props) {

    super(props);

    this.state = {
      kategori_id:"",
      id:props.detay.props.firmaUrun.id,
      adi:props.detay.props.firmaUrun.adi,
      urun_kodu:props.detay.props.firmaUrun.urun_kodu,
      fiyat:props.detay.props.firmaUrun.fiyat,
      urun_aciklama:props.detay.props.firmaUrun.urun_aciklama,
      urun_tip_kodu:props.detay.props.urun_tip_kodu,
      resim:undefined
    };
    console.log(props.kategori);
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
    this.setState({ kategori_id: e.target.value });
  
  };
  handleUrunAdi = (e) => {
    e.preventDefault();
    this.setState({ adi: e.target.value });
  
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
  
    this.setState({ resim: e.target.files[0]});

  };
  handleSubmit = (e) => {
    e.preventDefault();
   
    let data={
      firma_id:getUser().id,
      id:this.state.id,
      ozellikler:[3,7],
      kategori_id:this.state.kategori_id,
      adi:this.state.adi,
      urun_kodu:this.state.urun_kodu,
      fiyat:this.state.fiyat,
      urun_aciklama:this.state.urun_aciklama,
      urun_tip_kodu:this.state.urun_tip_kodu,
      resim:this.state.resim
    };
   
  
    axios({
      method: "post",
      url: "https://localhost:44363/firmaurun/guncelle",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
   
        alert("Kayıt işlemi başarılı",response)
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }
  render() {

    const{ kategori_id,adi,urun_kodu,fiyat,urun_aciklama,urun_tip_kodu,resim}=this.state;

    const kategorim=this.props.kategori;
    return (
      <div>
        <h3 style={{textAlign:"center"}}>Ürün Düzenle</h3>
       <Form onSubmit={this.handleSubmit} className="mt-3" style={{paddingTop:"10px"}}>
          
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Adı:</span>
                <Form.Control
                    
                placeholder="Ürün Adı"
                name="adi"

               value={adi}
               onChange={this.handleUrunAdi}
                required 
               
                />
            </Form.Group>
            <Form.Group style={{marginTop:"10px"}}>
            <span>Ürün Kategorisi:</span>
            <Form.Control 
             placeholder = ""
             id = "kategori_id"
             as = "select"
             value={kategori_id}
             onChange={this.handleKategoriId}>
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
            
            </Form.Control>


          
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
                name='file'
                accept="image/png, image/jpeg"
            
                onChange={this.handleUrunResim}
                />    
         </Form.Group>
         <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>Ürünü Düzenle</Button>
      </Form>
      </div>

    )
  }
}
export default ProductUpdate;
