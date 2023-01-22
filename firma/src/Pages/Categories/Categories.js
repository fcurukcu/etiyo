import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getUser } from '../../Utils/Common';
import axios from 'axios';
import './Categories.css';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AnaKategoriEkle from './AnaKategoriEkle';
import AltKategoriEkle from './AltKategoriEkle';
import EnAltKategoriEkle from './EnAltKategoriEkle';
import AnaKategoriDuzenle from './AnaKategoriDuzenle';
import AltKategoriDuzenle from './AltKategoriDuzenle';
import EnAltKategoriDuzenle from './EnAltKategoriDuzenle';
import AnaKategoriSil from './AnaKategoriSil';
import AltKategoriSil from './AltKategoriSil';
import EnAltKategoriSil from './EnAltKategoriSil';

class Categories extends Component {
    constructor(props) {

        super(props);

        this.state = {
            category: [],
            mainKategoriSelect: null,
            oneKategoriSelect: null,
            twoKategoriSelect: null,
            open: false,
            openAltKategori: false,
            openEnAltKategori: false,
            openAnaKategoriDuzenle: false,
            openAltKategoriDuzenle: false,
            openEnAltKategoriDuzenle: false,
            openAnaKategoriDelete: false,
            openAltKategoriDelete: false,
            openEnAltKategoriDelete: false,
            anaKategori: null,
            altKategori: null,
            enaltKategori: null,

        };

    }
    onOpenModal = () => {

        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    onOpenModalAltKategori = (kategori) => {
        this.setState({ anaKategori: kategori });
        this.setState({ openAltKategori: true });
    };

    onCloseModalAltKategori = () => {
        this.setState({ openAltKategori: false });
    };
    onOpenModalEnAltKategori = (kategori) => {
        this.setState({ altKategori: kategori });
        this.setState({ openEnAltKategori: true });
    };

    onCloseModalEnAltKategori = () => {
        this.setState({ openEnAltKategori: false });
    };
    onOpenModalAnaKategoriDuzenle = (kategori) => {
        this.setState({ anaKategori: kategori });
        this.setState({ openAnaKategoriDuzenle: true });
    };

    onCloseModalAnaKategoriDuzenle = () => {
        this.setState({ openAnaKategoriDuzenle: false });
    };
    onOpenModalAltKategoriDuzenle = (kategori) => {

        this.setState({ altKategori: kategori });
        this.setState({ openAltKategoriDuzenle: true });
    };
    onOpenModalAnaKategoriDelete = (kategori) => {
        this.setState({ anaKategori: kategori });
        this.setState({ openAnaKategoriDelete: true });
        

    };
    onCloseModalAnaKategoriDelete = () => {
        this.setState({ openAnaKategoriDelete: false });
    };
    onOpenModalAltKategoriDelete = (kategori) => {
        this.setState({ altKategori: kategori });
        this.setState({ openAltKategoriDelete: true });

    };
    onCloseModalAltKategoriDelete = () => {
        this.setState({ openAltKategoriDelete: false });
    };
    onOpenModalEnAltKategoriDelete = (kategori) => {
        this.setState({ enaltKategori: kategori });
        this.setState({ openEnAltKategoriDelete: true });

    };
    onCloseModalEnAltKategoriDelete = () => {
        this.setState({ openEnAltKategoriDelete: false });
    };

    onCloseModalAltKategoriDuzenle = () => {
        this.setState({ openAltKategoriDuzenle: false });
    };
    onOpenModalEnAltKategoriDuzenle = (kategori) => {
        this.setState({ enaltKategori: kategori });
        this.setState({ openEnAltKategoriDuzenle: true });
    };

    onCloseModalEnAltKategoriDuzenle = () => {
        this.setState({ openEnAltKategoriDuzenle: false });
    };
 
    componentDidMount() {
        const user = getUser();
        axios.get(`https://localhost:44363/urunkategori/liste/` + user.firma_id)
            .then(res => {
                const category = res.data.response;
                this.setState({ category: category });

            })
        
    }


    mainSelectClick = (kategori) => {
        this.setState({ mainKategoriSelect: kategori })
    }
    oneSelectClick = (kategori) => {
        this.setState({ oneKategoriSelect: kategori })
    }
    twoSelectClick = (kategori) => {
        this.setState({ twoKategoriSelect: kategori })
    }


    render() {
        return (
            <>
                <div className='row' style={{ marginBottom: "28px" }}></div>
                <div className='row' >
                    <div className='col-md-12' >
                        <h3 className="font-weight-bold py-3 mb-0 head">Ürün Kategori Listesi</h3>
                        <span className='head-span'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="#">Ürün Kategori Listesi</Link></li>

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
                    <div className="card-header">
                        <h5>Ürün Kategorileri</h5>
                    </div>
                    <div className='treex well'>
                        <div className='col-md-12 mainCategory'>
                            <Link className="btn btn-success btn-sm" onClick={this.onOpenModal}><span style={{ color: "#fff", border: "none" }}>Ana Kategori Ekle</span></Link>
                        </div>
                        <ul>
                            {
                                this.state.category ? this.state.category.map((kategori, i) => {
                                    return (
                                        <>
                                            <li key={i} className="parent_li" onClick={() => this.mainSelectClick(kategori)}>
                                                <span id="mainKategory" title={kategori.adi}><i style={{ marginRight: "10px" }} className={this.state.mainKategoriSelect === kategori ? "fa fa-folder-open" : "fa fa-folder"}></i> {kategori.adi}</span>
                                                <Link className="btn btn-warning btn-sm" onClick={() => this.onOpenModalAnaKategoriDuzenle(kategori)}><i style={{ color: "#fff" }} className="fa fa-pen"></i></Link>
                                                <Link className="btn btn-danger btn-sm" onClick={() => this.onOpenModalAnaKategoriDelete(kategori)}><i style={{ color: "#fff" }} className="fa fa-trash"></i></Link>
                                                <Link className="btn btn-success btn-sm" onClick={() => this.onOpenModalAltKategori(kategori)}><span className='subCategorySpan'>Alt Kategori Ekle</span></Link>
                                                <ul>



                                                    {kategori.oneKategori.map((oneKategori, k) => {
                                                        return (
                                                            <>
                                                                <li key={k} className="parent_li" style={this.state.mainKategoriSelect === kategori ? null : { display: "none" }} onClick={() => this.oneSelectClick(oneKategori)}>
                                                                    <span id="subCategory" title={oneKategori.adi}>
                                                                        <i style={{ marginRight: "10px" }} className={this.state.oneKategoriSelect === oneKategori ? "fa fa-folder-open" : "fa fa-folder"}>
                                                                        </i>{oneKategori.adi}
                                                                    </span>
                                                                    <Link className="btn btn-warning btn-sm" onClick={() => this.onOpenModalAltKategoriDuzenle(oneKategori)}><i style={{ color: "#fff" }} className="fa fa-pen"></i></Link>
                                                                    <Link className="btn btn-danger btn-sm" onClick={() => this.onOpenModalAltKategoriDelete(oneKategori)}><i style={{ color: "#fff" }} className="fa fa-trash"></i></Link>
                                                                    <Link className="btn btn-success btn-sm" onClick={() => this.onOpenModalEnAltKategori(oneKategori)}><span className='subCategorySpan'>Alt Kategori Ekle</span></Link>
                                                                    <ul>

                                                                        {
                                                                            oneKategori.twoKategori.map((twoKategori, m) => {
                                                                                return (
                                                                                    <>
                                                                                        <li key={m} onClick={() => this.twoSelectClick(twoKategori)} style={this.state.oneKategoriSelect === oneKategori ? null : { display: "none" }}>
                                                                                            <span id={twoKategori.adi}><i style={{ marginRight: "10px" }}> </i>{twoKategori.adi}
                                                                                            </span>
                                                                                            <Link className="btn btn-warning btn-sm" onClick={() => this.onOpenModalEnAltKategoriDuzenle(twoKategori)} ><i style={{ color: "#fff" }} className="fa fa-pen"></i></Link>
                                                                                            <Link className="btn btn-danger btn-sm" onClick={() => this.onOpenModalEnAltKategoriDelete(twoKategori)}><i style={{ color: "#fff" }} className="fa fa-trash"></i></Link>
                                                                                            <Link className="btn btn-info btn-sm" ><span className='subCategorySpan'>Özellik Ekle</span></Link>
                                                                                        </li>
                                                                                        <Modal open={this.state.openEnAltKategoriDuzenle} onClose={this.onCloseModalEnAltKategoriDuzenle} style={{ marginTop: "500px" }}>
                                                                                            <div className="card">
                                                                                                <div className="card-body">
                                                                                                    <EnAltKategoriDuzenle props={this.state.enaltKategori} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </Modal>
                                                                                        <Modal open={this.state.openEnAltKategoriDelete} onClose={this.onCloseModalEnAltKategoriDelete} style={{ marginTop: "500px" }}>
                                                                                            <div className="card">
                                                                                                <div className="card-body">
                                                                                                    <EnAltKategoriSil props={this.state.enaltKategori} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </Modal>

                                                                                    </>


                                                                                )

                                                                            })
                                                                        }

                                                                    </ul>
                                                                </li>
                                                                <Modal open={this.state.openAltKategoriDuzenle} onClose={this.onCloseModalAltKategoriDuzenle} style={{ marginTop: "500px" }}>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <AltKategoriDuzenle props={this.state.altKategori} />
                                                                        </div>
                                                                    </div>
                                                                </Modal>
                                                                <Modal open={this.state.openAltKategoriDelete} onClose={this.onCloseModalAltKategoriDelete} style={{ marginTop: "500px" }}>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <AltKategoriSil props={this.state.altKategori} />
                                                                        </div>
                                                                    </div>
                                                                </Modal>
                                                                <Modal open={this.state.openEnAltKategori} onClose={this.onCloseModalEnAltKategori} style={{ marginTop: "500px" }}>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <EnAltKategoriEkle props={this.state.altKategori} />
                                                                        </div>
                                                                    </div>
                                                                </Modal>
                                                            </>
                                                        )
                                                    })
                                                    }

                                                </ul>
                                            </li>
                                            <Modal open={this.state.openAnaKategoriDuzenle} onClose={this.onCloseModalAnaKategoriDuzenle} style={{ marginTop: "500px" }}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <AnaKategoriDuzenle props={this.state.anaKategori} />
                                                    </div>
                                                </div>
                                            </Modal>
                                            <Modal open={this.state.openAnaKategoriDelete} onClose={this.onCloseModalAnaKategoriDelete} style={{ marginTop: "500px" }}>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <AnaKategoriSil props={this.state.anaKategori} />
                                                                        </div>
                                                                    </div>
                                                                </Modal>
                                            <Modal open={this.state.openAltKategori} onClose={this.onCloseModalAltKategori} style={{ marginTop: "500px" }}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <AltKategoriEkle props={this.state.anaKategori} />
                                                    </div>
                                                </div>
                                            </Modal>

                                        </>
                                    )

                                }) : null
                            }

                        </ul>
                    </div>

                </div>


                <Modal open={this.state.open} onClose={this.onCloseModal} style={{ marginTop: "500px" }}>
                    <div className="card">
                        <div className="card-body">
                            <AnaKategoriEkle />
                        </div>
                    </div>
                </Modal>



            </>
        )
    }
}
export default Categories;
