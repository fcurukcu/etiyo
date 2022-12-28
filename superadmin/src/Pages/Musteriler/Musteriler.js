import React, { Component } from 'react'
import './Musteriler.css';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Musteri from './Musteri';
export class Musteriler extends Component {
  constructor(props) {

    super(props);

    this.state = {

      posts: [],
    

    };

  }
  componentDidMount() {
    axios.get(`https://localhost:44363/firma/firmalistesi`)
      .then(res => {
        const posts = res.data.response;
        this.setState({ posts });

      })

  }

  render() {
  
    const {posts } = this.state;

    return (
      <>
        <div className='row' style={{ marginBottom: "28px" }}></div>
        <div className='row' >
          <h3 className="font-weight-bold py-3 mb-0">Müşteri Listesi</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
            <li className="breadcrumb-item"><a href="#">Müşteri Listesi</a></li>
            {/* <li class="breadcrumb-item active">Transkript Listesi</li> */}
          </ol>
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
          <div className="card-header">
            <h5>Müşteriler</h5>
          </div>
          <div className="card-body">
          <MDBTable bordered>
              <MDBTableHead>
          
                <tr>
                  <th scope='col'>Firma ID</th>
                  <th scope='col'>Firma Adı</th>
                  <th scope='col'>Firma Adres</th>
                  <th scope='col'>Firma Telefon</th>
                  <th scope='col'>Firma Mail</th>
                  <th scope='col'>Firma Domain</th>
                  <th scope='col'>Web Sitesini Kaldır</th>
                  <th scope='col'>Web Sitesine Git</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {
                  posts.map((post,i) => {
                    return(
                  
                      
                      <Musteri key={i} props={post}/>
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

export default Musteriler