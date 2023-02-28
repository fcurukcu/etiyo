import React, { Component } from 'react'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { getUser } from '../../Utils/Common';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SiparisOnayla from './SiparisOnayla';
import SiparisReddet from './SiparisReddet';
import SiparisKargoKoduEkleme from './SiparisKargoKoduEkleme';
import SiparisKargoKoduDuzenle from './SiparisKargoKoduDuzenle';
import SiparisKargoSil from './SiparisKargoSil';
export class Orders extends Component {
  constructor(props) {

    super(props);

    this.state = {

      posts: [],
      onayOpen: false,
      redOpen: false,
      kargoOpen: false,
      kargoDuzenle: false,
      kargoSil: false,
      onay:null,
      red:null,
      kargo:null
    };

  }
  siparisVerileri(){
    const user = getUser();
   

    axios.get(`https://localhost:44363/firmasiparis/siparislistesi/` + user.firma_id)
      .then(res => {
        const posts = res.data.response;
        this.setState({ posts });


      })
  }
  componentDidMount() {
   this.siparisVerileri();
  }
  componentDidUpdate(){
    this.siparisVerileri();
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
  onOpenKargoModal = (kargo) => {
    this.setState({ kargo: kargo });
    this.setState({ kargoOpen: true });
  };
  onCloseKargoModal = () => {
    this.setState({ kargoOpen: false });
  };
  onOpenKargoDuzenleModal = (kargo) => {
    this.setState({ kargo: kargo });
    this.setState({ kargoDuzenle: true });
  };
  onCloseKargoDuzenleModal = () => {
    this.setState({ kargoDuzenle: false });
  };
  onOpenKargoSilModal = (kargo) => {
    this.setState({ kargo: kargo });
    this.setState({ kargoSil: true });
  };
  onCloseKargoSilModal = () => {
    this.setState({ kargoSil: false });
  };
  render() {


    const { posts } = this.state;
    return (
      <>
        <div className='row' style={{ marginBottom: "28px" }}></div>
        <div className='row' >
          <div className='col-md-12' >
            <h3 className="font-weight-bold py-3 mb-0 head">Sipariş Listesi</h3>
            <span className='head-span'>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                <li className="breadcrumb-item"><a href="#">Sipariş Listesi</a></li>
              </ol>
            </span>
          </div>
        </div>

        <div className="card mt-1">
          <div className="card-header">
            <h5>Bilgi</h5>
          </div>
          <div className="card-body">
            <p>Burada müşterinin sipariş ettiği ürünler listelenir ve burada sipariş onaylama ve reddetme işlemleri yapılır </p>
          </div>
        </div>
        <div className="card  mt-3">
          <div className="card-header">
            <h5>Siparişlar</h5>
          </div>
          <div className="card-body">
            <MDBTable bordered>
              <MDBTableHead>

                <tr>
                  <th scope='col'>Sipariş Numarası</th>
                  <th scope='col'>Sipariş Kodu</th>
                  <th scope='col'>Ürün Id</th>
                  <th scope='col'>Ürün Kodu</th>
                  <th scope='col'>Ürün No</th>
                  <th scope='col'>Ürün Adı</th>
                  <th scope='col'>Onay Red Durumu</th>
                  <th scope='col'>Kargo Kodu</th>
                  <th scope='col'>Kargo İşlem</th>
                  <th scope='col'>İşlem</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {
                  posts.map((post, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <td scope='row'>{post.siparis.id}</td>
                          <td>{post.siparis.siparis_kodu}</td>
                          <td>{post.siparis.urun_id}</td>
                          <td>{post.siparis.urun_kodu}</td>
                          <td>{post.urunNo}</td>
                          <td>{post.urunAdi}</td>
                          <td>{post.siparis.onay_durumu == '1' ? "Onaylandı" : "Onaylanmadı"}</td>
                          <td>{post.siparis.kargo_kodu}</td>
                      
                          <td> 
                            <button className='buton btn-success btn-sm' onClick={() => this.onOpenKargoModal(post)}><i className='fa fa-plus'></i></button>
                            <button className='buton btn-info btn-sm' onClick={() => this.onOpenKargoDuzenleModal(post)}><i className='fa fa-pencil' style={{color:"white"}}></i></button>
                            <button className='buton btn-danger btn-sm' onClick={() => this.onOpenKargoSilModal(post)}><i className='fa fa-trash' style={{color:"white"}}></i></button>
                            </td>
                          <td>
                            <button className='buton btn-success btn-sm' onClick={() => this.onOpenOnayModal(post)} >Onayla</button>
                            <button className='buton btn-danger btn-sm' onClick={() => this.onOpenRedModal(post)}>Reddet</button>
                          </td>
                        </tr>
                        <Modal open={this.state.onayOpen} onClose={this.onCloseOnayModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <SiparisOnayla props={this.state.onay} />
                            </div>
                          </div>
                        </Modal>
                        <Modal open={this.state.redOpen} onClose={this.onCloseRedModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <SiparisReddet props={this.state.red} />
                            </div>
                          </div>
                        </Modal>
                        <Modal open={this.state.kargoOpen} onClose={this.onCloseKargoModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <SiparisKargoKoduEkleme props={this.state.kargo} />
                            </div>
                          </div>
                        </Modal> 
                        <Modal open={this.state.kargoDuzenle} onClose={this.onCloseKargoDuzenleModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <SiparisKargoKoduDuzenle props={this.state.kargo} />
                            </div>
                          </div>
                        </Modal>
                        <Modal open={this.state.kargoSil} onClose={this.onCloseKargoSilModal} style={{ marginTop: "500px" }}>
                          <div className="card">
                            <div className="card-body">
                              <SiparisKargoSil props={this.state.kargo} />
                            </div>
                          </div>
                        </Modal>

                      </>
                    )
                  })
                }



              </MDBTableBody>
            </MDBTable>


          </div>
        </div>

      </>
    )
  }
}

export default Orders