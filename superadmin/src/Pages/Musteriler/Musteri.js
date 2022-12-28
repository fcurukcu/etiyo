import React, { Component } from 'react'

class Musteri extends Component {
    constructor(props){
        super(props)
     
    }
  render() {
    return (
      <>
         <tr>
            <td scope='row'>{this.props.props.id}</td>
            <td>{this.props.props.firma_adi}</td>
            <td>{this.props.props.firma_adres}</td>
            <td>{this.props.props.firma_tel1}</td>
            <td>{this.props.props.firma_mail}</td>
            <td>{this.props.props.firma_domain}</td>
            <td> <button className='buton btn-danger btn-sm'>Kaldır</button></td>
            <td><button  className='buton btn-success btn-sm'>Git</button>
               
            </td>
            </tr>
      </>
    )
  }
}
export default  Musteri
