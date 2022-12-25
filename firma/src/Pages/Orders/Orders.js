import React, { Component } from 'react'
// import './Musteriler.css';

import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
export class Orders extends Component {

  render() {
    const data = {
      columns: [
        {
          label: 'Sipariş Numarası',
          field: 'orderNumber',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Ürün Id',
          field: 'producId',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Ürün No',
          field: 'productNo',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Ürün Adı',
          field: 'productName',
          sort: 'asc',
          width: 100
        },
        {
            label: 'Kargo Durumu',
            field: 'cargoStatus',
            sort: 'asc',
            width: 100
          },
        {
          label: 'Onay Red Durumu',
          field: 'status',
          sort: 'asc',
          width: 150
        },
        {
          label: 'İşlem',
          field: 'process',
          sort: 'asc',
          width: 100
        },
       
      ],


      rows: [
        {
            orderNumber: '0000001',
            producId: '45286866',
            productNo: '45286866ed565',
            productName: 'Kruvaze elbise',
            
          cargoStatus: '',
          status: 'Onaylandı',
          process: <><Link to='/view' className='buton btn-success btn-sm'>Onayla</Link>
          <Link to='/view' className='buton btn-danger btn-sm'>Reddet</Link></>
        },
        {
            orderNumber: '0000001',
            producId: '45286866',
            productNo: '45286866ed565',
            productName: 'Kruvaze elbise',
            
          cargoStatus: '',
          status: 'Bekliyor',
          process: <><Link to='/view' className='buton btn-success btn-sm'>Onayla</Link>
          <Link to='/view' className='buton btn-danger btn-sm'>Reddet</Link></>
        },
        {
            orderNumber: '0000001',
            producId: '45286866',
            productNo: '45286866ed565',
            productName: 'Kruvaze elbise',
            
          cargoStatus: '',
          status: 'Reddesildi',
          process: <><Link to='/view' className='buton btn-success btn-sm'>Onayla</Link>
          <Link to='/view' className='buton btn-danger btn-sm'>Reddet</Link></>
        },
       

      ]
    };


    return (
      <>
        <div className='row' style={{ marginBottom: "28px" }}></div>
        <div className='row' >
          <h3 className="font-weight-bold py-3 mb-0">Sipariş Listesi</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
            <li className="breadcrumb-item"><a href="#">Sipariş Listesi</a></li>
            {/* <li class="breadcrumb-item active">Transkript Listesi</li> */}
          </ol>
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

export default Orders