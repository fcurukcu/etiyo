import React, { Component } from 'react'
import './Product.css'
import axios from 'axios';
class ProductDelete extends Component {
  constructor(props){
    super(props);
    console.log(props.detay.props.firmaUrun.id);
  }
  deleteRow(id){  
    axios.get(`https://localhost:44363/firmaurun/sil/`+id)
    .then(function (response) {
      //handle success
      alert("Silme işlemi başarılı",response)
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });


    
  }  
  render() {
    return (
        <>
        <form className="modal-content">
        <div className="Sil">
        
          <p>Silmek istediğinize emin misiniz?</p>
    
          <div className="clearfix">
          <button  onClick={(e) => this.deleteRow(this.props.detay.props.firmaUrun.id)} type="button" className="deletebtn">Delete</button>
            <button  type="button" className="cancelbtn">Cancel</button>
           
          </div>
        </div>
      </form>
        </>
        
    )
  }
}
export default ProductDelete;