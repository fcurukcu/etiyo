import React, { Component } from 'react';
import axios from 'axios';
export class WebSitesiOnayla extends Component {
    constructor(props) {
        super(props);
     
    }
    Guncelle() {

        let data={
            firm_id:this.props.props.id,
           
            site_aktif_pasif:true

          };
          axios({
              method: "post",
              url: "https://localhost:44363/firma/statusupdate",
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
        <h3 style={{ textAlign: "center" }}>Web Sitesini Aktif Etme</h3>
        <form className="modal-content">
            <div className="Sil">

                <p>Web sitesini aptif etmek istediğinize emin misiniz?</p>

                <div className="clearfix">
                    <button  onClick={(e) => this.Guncelle()} type="button" className="deletebtn" style={{background:"green"}}>Aktif Et</button>
                    <button type="button" className="cancelbtn">Cancel</button>

                </div>
            </div>
        </form>
    </div>

      
          )
    
  }
}
export default WebSitesiOnayla;
