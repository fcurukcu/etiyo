import React, { Component } from 'react';
import axios from 'axios';
export class SiparisReddet extends Component {
    constructor(props) {
        super(props);
       console.log("siparisred",props);
    }
    Guncelle() {

        let data={
            id:this.props.props.siparis.id,
            firma_id:this.props.props.siparis.firma_id,
            onay_durumu:false

          };
          axios({
              method: "post",
              url: "https://localhost:44363/firmasiparis/siparisdurum",
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
        <h3 style={{ textAlign: "center" }}>Sipariş Reddetme</h3>
        <form className="modal-content">
            <div className="Sil">

                <p>Siparişi reddetmek istediğinize emin misiniz?</p>

                <div className="clearfix">
                    <button onClick={(e) => this.Guncelle()} type="button" className="deletebtn" >Reddet</button>
                    <button type="button" className="cancelbtn">Cancel</button>

                </div>
            </div>
        </form>
    </div>

      
          )
    
  }
}
export default SiparisReddet;
