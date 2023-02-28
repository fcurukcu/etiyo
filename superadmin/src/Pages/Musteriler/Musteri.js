import React, { Component } from 'react'
import WebSitesiOnayla from './WebSitesiOnayla';
import WebSitesiReddet from './WebSitesiReddet';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {getUser,setUserTokenSession} from '../../Utils/Common';
import axios from "axios";
class Musteri extends Component {
    constructor(props){
        super(props)
      this.state={
        onayOpen: false,
        redOpen: false,
      }
    }
    onOpenOnayModal = (onay) => {
      this.setState({ onay: onay });
      this.setState({ onayOpen: true });
    };
    onCloseOnayModal = () => {
      this.setState({ onayOpen: false });
    };
    onOpenRedModal = (Red) => {
      this.setState({ red: Red });
      this.setState({ redOpen: true });
    };
    onCloseRedModal = () => {
      this.setState({ redOpen: false });
    };
    firmaBilgileriGetir()
    {
        const user=getUser();
        axios.post('https://localhost:44363/firma/getfirma',{
            id:user.id
        }).then((res)=>{
             setUserTokenSession(res.data.response.token);
             this.setState({
                 checked:+res.data.response.template_kodu
             })
        })
    }
  render() {
    this.firmaBilgileriGetir();
    const openInNewTab = url => {
          
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
      <>
         <tr>
            <td scope='row'>{this.props.props.id}</td>
            <td>{this.props.props.firma_adi}</td>
            <td>{this.props.props.firma_adres}</td>
            <td>{this.props.props.firma_tel1}</td>
            <td>{this.props.props.firma_mail}</td>
            <td>{this.props.props.firma_domain}</td>
            <td>{this.props.props.site_aktif_pasif==1?"Site Aktif":"Site Pasif"}</td>
            <td> 
            <button onClick={() => this.onOpenOnayModal(this.props.props)} className='buton btn-success btn-sm'>Aktif Et</button>
              <button onClick={() => this.onOpenRedModal(this.props.props)} className='buton btn-danger btn-sm'>Kaldır</button>
              </td>
            <td><button onClick={() => openInNewTab('http://localhost:3001/template/'+this.props.props.template_kodu)} className='buton btn-success btn-sm'>Git</button>
               
            </td>
            </tr>
            <Modal open={this.state.onayOpen} onClose={this.onCloseOnayModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <WebSitesiOnayla props={this.state.onay} />
                            </div>
                          </div>
                        </Modal>
                        <Modal open={this.state.redOpen} onClose={this.onCloseRedModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <WebSitesiReddet props={this.state.red} />
                            </div>
                          </div>
                        </Modal>
      </>
    )
  }
}
export default  Musteri
