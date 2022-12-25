import React, { Component } from 'react'
// import './Musteriler.css';

import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
export class Products extends Component {

  render() {
    const data = {
      columns: [
        {
          label: 'Ürün ID',
          field: 'productId',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Ürün Numarası',
          field: 'productNumber',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Ürün Adı',
          field: 'productName',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Ürün Kategorisi',
          field: 'productCategory',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Ürün Fiyatı',
          field: 'productPrice',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Ürün Özellikleri',
          field: 'productProperties',
          sort: 'asc',
          width: 100
        },
        {
          label: 'İşlem',
          field: 'process',
          sort: 'asc',
          width: 100
        }
      ],


      rows: [
        {
            productId: '65656565',
            productNumber: '45sdf45',
            productName: 'Kruvaze Elbise',
            productCategory: 'Elbise',
            productPrice: '500 tl',
            productProperties:<Link to='/view' className='buton btn-info btn-sm'><i className='fa fa-eye'></i></Link>,
            process: <><Link to='/view' className='buton btn-warning btn-sm'>Güncelle</Link>
            <Link to='/view' className='buton btn-danger btn-sm'>Sil</Link>
            </>,
        },
        {
            productId: '65656565',
            productNumber: '45sdf45',
            productName: 'Kruvaze Elbise',
            productCategory: 'Elbise',
            productPrice: '500 tl',
            productProperties:<Link to='/view' className='buton btn-info btn-sm'><i className='fa fa-eye'></i></Link>,
            process: <><Link to='/view' className='buton btn-warning btn-sm'>Güncelle</Link>
            <Link to='/view' className='buton btn-danger btn-sm'>Sil</Link>
            </>,
        },
        {
            productId: '65656565',
            productNumber: '45sdf45',
            productName: 'Kruvaze Elbise',
            productCategory: 'Elbise',
            productPrice: '500 tl',
            productProperties:<Link to='/view' className='buton btn-info btn-sm'><i className='fa fa-eye'></i></Link>,
            process: <><Link to='/view' className='buton btn-warning btn-sm'>Güncelle</Link>
            <Link to='/view' className='buton btn-danger btn-sm'>Sil</Link>
            </>,
        },
        {
            productId: '65656565',
            productNumber: '45sdf45',
            productName: 'Kruvaze Elbise',
            productCategory: 'Elbise',
            productPrice: '500 tl',
            productProperties:<Link to='/view' className='buton btn-info btn-sm'><i className='fa fa-eye'></i></Link>,
            process: <><Link to='/view' className='buton btn-warning btn-sm'>Güncelle</Link>
            <Link to='/view' className='buton btn-danger btn-sm'>Sil</Link>
            </>,
        },
        {
            productId: '65656565',
            productNumber: '45sdf45',
            productName: 'Kruvaze Elbise',
            productCategory: 'Elbise',
            productPrice: '500 tl',
            productProperties:<Link to='/view' className='buton btn-info btn-sm'><i className='fa fa-eye'></i></Link>,
            process: <><Link to='/view' className='buton btn-warning btn-sm'>Güncelle</Link>
            <Link to='/view' className='buton btn-danger btn-sm'>Sil</Link>
            </>,
        },
        {
            productId: '65656565',
            productNumber: '45sdf45',
            productName: 'Kruvaze Elbise',
            productCategory: 'Elbise',
            productPrice: '500 tl',
            productProperties:<Link to='/view' className='buton btn-info btn-sm'><i className='fa fa-eye'></i></Link>,
            process: <><Link to='/view' className='buton btn-warning btn-sm'>Güncelle</Link>
            <Link to='/view' className='buton btn-danger btn-sm'>Sil</Link>
            </>,
        },


      ]
    };


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
            {/* <li class="breadcrumb-item active">Transkript Listesi</li> */}
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
          <div className="card-header" style={{display: "flex"}}>
            <h5 style={{flex:1}}>Ürünler</h5>
            <span><Link to='/view' className='buton btn-success btn-sm'>Ürün Ekle</Link></span>
          </div>
          <div className="card-body">
            <MDBDataTable
              striped
              bordered
              hover
              data={data}
              searchLabel={"Ara"}
              paginationLabel={["Önce", "Sonra"]}
              entrieslabel=""
              noBottomColumns={true}
            />

          </div>
        </div>

      </>
    )
  }
}

export default Products