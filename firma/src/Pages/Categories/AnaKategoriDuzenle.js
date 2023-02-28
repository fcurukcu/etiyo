import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
export class AnaKategoriDuzenle extends Component {
  constructor(props) {

    super(props);

    this.state = {
      adi:props.props.adi,
      
    };
    this.handleKategoriAdi=this.handleKategoriAdi.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleKategoriAdi = (e) => {
    e.preventDefault();
    this.setState({ adi: e.target.value });
  
  };
  handleSubmit = (e) => {
    e.preventDefault();
   
    let data={
      adi:this.state.adi,
      id:this.props.props.id,
      parent_id:0
    };
    axios({
        method: "post",
        url: "https://localhost:44363/urunkategori/guncelle",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          alert("Kayıt işlemi başarılı",response)
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });


  };
  render() {
    return (
        
            <div>
              <h3 style={{textAlign:"center"}}>Ana Kategori Düzenle</h3>
             <Form onSubmit={this.handleSubmit} className="mt-3" style={{paddingTop:"10px"}}>
                
                  <Form.Group style={{marginTop:"10px"}}>
                  <span>Ana Kategori Adi:</span>
                      <Form.Control
                          
                           value={this.state.adi}
                           onChange={this.handleKategoriAdi}
                      required 
                     
                      />
                  </Form.Group>
                 
        
              
               <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>Ana Kategori Düzenle</Button>
            </Form>
            </div>
      
          )
    
  }
}
export default AnaKategoriDuzenle;
