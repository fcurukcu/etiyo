import React, { Component } from 'react'
import './Musteriler.css';

import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
export class Musteriler extends Component {
  
  render() {
    const data = {
      columns: [
        {
          label: 'Firma Adı',
          field: 'firmName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Firma Adres',
          field: 'firmAddress',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Firma Telefon',
          field: 'firmPhone',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Firma Mail',
          field: 'firmMail',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Ödeme Durumu',
          field: 'paymentStatus',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Web Sitesi Kaldır',
          field: 'removeWebsite',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Web Sitesi Git',
          field: 'goWebsite',
          sort: 'asc',
          width: 100
        }
      ],
 

      rows: [
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        {
          firmName: 'Flo',
          firmAddress: 'İzmir Konak Piri Reis mah.',
          firmPhone: '0555 555 55 55',
          firmMail: 'info@flo.com',
          paymentStatus: 'Ödendi',
          removeWebsite: <Link to='/view' className='btn btn-success btn-sm'>Kaldır</Link>,
          goWebsite: <Link to='/view' className='btn btn-success btn-sm'>Git</Link>,
        },
        
        
      ]
    };

  
    return (
      <>
      <div className='row' style={{marginBottom: "28px"}}></div>
      <div className='row' >
      <h3 class="font-weight-bold py-3 mb-0">Müşteri Listesi</h3>
      <ol className="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
            <li class="breadcrumb-item"><a href="#">Müşteri Listesi</a></li>
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
        <MDBDataTable
      striped
      bordered
      hover
      data={data}
      searchLabel={"Ara"}
      paginationLabel={["Önce","Sonra"]}
      entrieslabel=""
      noBottomColumns={true}
    />
        
        </div>
      </div>
      
      </>
    )
  }
}

export default Musteriler