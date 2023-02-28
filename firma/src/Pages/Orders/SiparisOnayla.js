import React, { Component } from 'react';
import axios from 'axios';
export class SiparisOnayla extends Component {
    constructor(props) {
        super(props);
       
    }
    Guncelle() {

        let data={
            id:this.props.props.siparis.id,
            firma_id:this.props.props.siparis.firma_id,
            onay_durumu:true

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
        <h3 style={{ textAlign: "center" }}>Sipariş Onaylama</h3>
        <form className="modal-content">
            <div className="Sil">

                <p>Siparişi onaylamak istediğinize emin misiniz?</p>

                <div className="clearfix">
                    <button  onClick={(e) => this.Guncelle()} type="button" className="deletebtn" style={{background:"green"}}>Onayla</button>
                    <button type="button" className="cancelbtn">Cancel</button>

                </div>
            </div>
        </form>
    </div>

      
          )
    
  }
}
export default SiparisOnayla;
