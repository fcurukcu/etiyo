import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { getUser } from '../../Utils/Common';
import axios from 'axios';
export class SiparisKargoKoduDuzenle extends Component {
  constructor(props) {

    super(props);
    this.state = {
        kargoKodu:this.props.props.siparis.kargo_kodu,
        
      };
    
  }
  handleKargoKodu = (e) => {
    e.preventDefault();
    this.setState({ kargoKodu: e.target.value });
  
  };
  handleSubmit = (e) =>  {
    e.preventDefault();
    let data={
        id:this.props.props.siparis.id,
        firma_id:this.props.props.siparis.firma_id,
        kargo_kodu:this.state.kargoKodu

      };
      axios({
          method: "post",
          url: "https://localhost:44363/firmasiparis/siparisKargoKoduEkleme",
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
              <h3 style={{textAlign:"center",marginTop:"20px"}}>Siparişin Kargo Kodunu Düzenle</h3>
             <Form onSubmit={this.handleSubmit} className="mt-3" style={{paddingTop:"10px"}}>
                
                  <Form.Group style={{marginTop:"10px"}}>
                  <span>Kargo Kodu:</span>
                      <Form.Control
                          
                      placeholder="Kargo Kodu"
                      value={this.state.kargoKodu}
                      onChange={this.handleKargoKodu}
                      required 
                     
                     
                      />
                  </Form.Group>
                 
        
              
               <Button variant="success" type="submit" block style={{marginTop:"10px", width:"200px",marginLeft:"10px",marginRight:"10px"}}>Kargo Kodunu Düzenle</Button>
            </Form>
            </div>
      
          )
    
  }
}
export default SiparisKargoKoduDuzenle;
