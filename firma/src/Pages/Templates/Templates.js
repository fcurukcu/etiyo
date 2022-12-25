import React, { Component } from 'react'
import logo from '../../Assets/logo.png';
class Templates extends Component {
    render() {
        return (
            <div>
                <div className='row' style={{ marginBottom: "28px" }}></div>
                <div className='row' >
                    <h3 className="font-weight-bold py-3 mb-0">Tema Listesi</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="feather icon-home"></i></a></li>
                        <li className="breadcrumb-item"><a href="#">Tema Listesi</a></li>
                        {/* <li class="breadcrumb-item active">Transkript Listesi</li> */}
                    </ol>
                </div>

                <div className="card mt-1">
                    <div className="card-header">
                        <h5>Bilgi</h5>
                    </div>
                    <div className="card-body">
                        <p>Burada müşterinin seçeceği temalar gelecek </p>
                    </div>
                </div>
                <div className="card  mt-3">
                    <div className="card-header">
                        <h5>Temalar</h5>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="card  mt-3">
                                    <div className="card-header">
                                        <h5>Tema 1</h5>
                                    </div>
                                    <div className="card-body" style={{display:'flex',flexDirection: "column"}}>
                                    <img src={logo} className='firmalogomuz' style={{marginLeft: "auto",marginRight: "auto"}}/>
                                   <input className="allMessageInput mt-3" checked type="checkbox" data-indeterminate="false" />
                      
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className="card  mt-3">
                                    <div className="card-header">
                                        <h5>Tema 2</h5>
                                    </div>
                                    <div className="card-body" style={{display:'flex',flexDirection: "column"}}>
                                    <img src={logo} className='firmalogomuz' style={{marginLeft: "auto",marginRight: "auto"}}/>
                                   <input className="allMessageInput mt-3" type="checkbox" data-indeterminate="false" />
                      
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className="card  mt-3">
                                    <div className="card-header">
                                        <h5>Tema 3</h5>
                                    </div>
                                    <div className="card-body" style={{display:'flex',flexDirection: "column"}}>
                                    <img src={logo} className='firmalogomuz' style={{marginLeft: "auto",marginRight: "auto"}}/>
                                   <input className="allMessageInput mt-3" type="checkbox" data-indeterminate="false" />
                      
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Templates;
