import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { getUser } from '../../Utils/Common';
import axios from 'axios';
export class EnAltKategoriEkle extends Component {
  constructor(props) {

    super(props);

    this.state = {
      adi:"",
      
    };
   
  }
  handleKategoriAdi = (e) => {
    e.preventDefault();
    this.setState({ adi: e.target.value });
  
  };
  handleSubmit = (e) => {
    e.preventDefault();
   
    let data={
      firm_id:getUser().id,
      adi:this.state.adi,
      parent_id:this.props.props.id
    };
   
  
    axios({
      method: "post",
      url: "https://localhost:44363/urunkategori/ekle",
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
  }
  render() {
    return (
        
            <div>
              <h3 style={{textAlign:"center"}}>En Alt Kategori Ekle</h3>
             <Form onSubmit={this.handleSubmit} className="mt-3" style={{paddingTop:"10px"}}>
                
                  <Form.Group style={{marginTop:"10px"}}>
                  <span>En Alt Kategori Adi:</span>
                      <Form.Control
                          
                      placeholder="En Alt Kategori Adi"
                      name="EnAltKategoriAdi"
                      value={this.state.adi}
                      onChange={this.handleKategoriAdi}
                      required 
                     
                      />
                  </Form.Group>
                 
        
              
               <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>En Alt Kategori Ekle</Button>
            </Form>
            </div>
      
          )
    
  }
}
export default EnAltKategoriEkle;
