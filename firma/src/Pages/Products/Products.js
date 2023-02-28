import React, { Component } from 'react'
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Product from './Product';
import ProductsAdd from './ProductsAdd';
import { getUser } from '../../Utils/Common';

export class Products extends Component {
  constructor(props) {

    super(props);
    this.state = {
      posts: [],
      open: false,
      category:[]
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  dataVeriler(){
    const user=getUser();

    axios.get(`https://localhost:44363/firmaurun/liste/`+user.firma_id)
      .then(res => {
        const posts = res.data.response;
        this.setState({ posts });
       console.log(posts);
        ////  kategorileri liste çekildikten sonra çektim
        axios.get(`https://localhost:44363/urunkategori/liste/`+user.firma_id)
        .then(res => {
          const category = res.data.response;
          this.setState({ category:category });
          
        })
        /////
      })
  }
  componentDidMount() {

    this.dataVeriler();

  }
  componentDidUpdate(){
    this.dataVeriler();
  }


  render() {
    const {open,posts } = this.state;
    return (
      <>
        <div className='row' style={{ marginBottom: "28px" }}></div>
        <div className='row' >
          <div className='col-md-12' >
            <h3 className="font-weight-bold py-3 mb-0 head">Ürün Listesi</h3>
            <span className='head-span'>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                <li className="breadcrumb-item"><a href="#">Ürün Listesi</a></li>
            
              </ol>
            </span>
          </div>
        </div>

        <div className="card mt-1">
          <div className="card-header">
            <h5>Bilgi</h5>
          </div>
          <div className="card-body">
            <p>Burada siteye üye olan firma listesi yer almaktadır.Eğer firma ödemede geciktirme yaptıysa "web sitesi kaldır" butonu ile sitesi pasif edilebilir.
              "Web sitesine git" butonu ile de firmanın sistemine girip müşterinin sayfasını görebilir. </p>
          </div>
        </div>
        <div className="card  mt-3">
          <div className="card-header" style={{ display: "flex" }}>
            <h5 style={{ flex: 1 }}>Ürünler</h5>
            <span>
            <button onClick={this.onOpenModal}  className='buton btn-success btn-sm'>Ürün Ekle</button></span>
          </div>
          <div className="card-body">
            <MDBTable bordered>
              <MDBTableHead>

                <tr>
                  <th scope='col'>Ürün ID</th>
                  <th scope='col'>Ürün Numarası</th>
                  <th scope='col'>Ürün Adı</th>
                  <th scope='col'>Ürün Kategorisi</th>
                  <th scope='col'>Ürün Fiyatı</th>
                  <th scope='col'>Ürün Özellikleri</th>
                  <th scope='col'>İşlem</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {
                  posts.map((post,i) => {
                    return(
                  
                      <Product key={i} props={post} kategori={this.state.category}/>
                    )
                  })
                }



              </MDBTableBody>
            </MDBTable>

          </div>
        </div>
        <div>


        </div>
        <Modal open={open} onClose={this.onCloseModal} style={{marginTop:"500px"}}>
                          <div className="card">
                            <div className="card-body">
                               <ProductsAdd categories={this.state.category}/>
                            </div>
                          </div>
                        </Modal>
                      
      </>
    )
  }
}

export default Products