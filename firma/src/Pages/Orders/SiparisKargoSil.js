import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { getUser } from '../../Utils/Common';
import axios from 'axios';
export class SiparisKargoSil extends Component {
  constructor(props) {

    super(props);
    this.state = {
        kargoKodu:"",
        
      };
    
  }
 
  Guncelle(){
 
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
<h3 style={{ textAlign: "center" }}>Sipariş Kargo Kodu Silme</h3>
<form className="modal-content">
    <div className="Sil">

        <p>Sipariş kargo kodunu silmek istediğinize emin misiniz?</p>

        <div className="clearfix">
            <button onClick={(e) => this.Guncelle()} type="button" className="deletebtn" >Kargo Kodunu Sil</button>
            <button type="button" className="cancelbtn">Cancel</button>

        </div>
    </div>
</form>
</div>
      
          )
    
  }
}
export default SiparisKargoSil;
