import React, { Component } from 'react'
import './Product.css'
class ProductDelete extends Component {
  render() {
    return (
        <>
        <form className="modal-content">
        <div className="Sil">
        
          <p>Silmek istediğinize emin misiniz?</p>
    
          <div className="clearfix">
          <button  type="button" className="deletebtn">Delete</button>
            <button  type="button" className="cancelbtn">Cancel</button>
           
          </div>
        </div>
      </form>
        </>
    )
  }
}
export default ProductDelete;