import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Settings.css';
import { setUserSession } from '../../Utils/Common';
import logo from '../../Assets/logo.png';
function Settings() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        userId: '',
        password: '',
        showPassword: false
    })

    const handleChange = (prop) => (event) => {
        setValues({
            ...values, [prop]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        ////// apiye bağlandıktan sonra 
        setLoading(false);
        setError(null);
        setUserSession('testtttt', JSON.stringify({ "user": values.userId }), 'lecturer');
        navigate('/admin');

        // axios('http://analytics.ieu.edu.tr/WebAPITest/api/test/'+values.userId,{
        //     method:'GET',
        //      headers:{"Access-Control-Allow-Origin":"*"}
        //     // authorization:'xxxxxxxxx'}
        // }).then((res)=>{
        //     console.log(res)
        //     setLoading(false);
        //     setError(null);
        //     setUserSession('testtttt',JSON.stringify(res.data),'student');
        //     // setYukleniyor(false);
        //     // history.go(-1);

        //     navigate('/');
        // }).catch(err=>{
        //     setLoading(false);
        //     if(error.res.status===401 || error.res.status===400)
        //     {
        //         setError(err.response.data.message);
        //     }
        //     else
        //     {
        //         setError("somethinh went WrongLocation.Please try again later");
        //     }

        // })


        // login(values.userId,values.password);
    }
    return (
        <>
            <div className='row' style={{ marginBottom: "28px" }}></div>
            <div className='row' >
                <div className='col-md-12' >
                    <h3 className="font-weight-bold py-3 mb-0 head">Ayarlar</h3>
                    <span className='head-span'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#"><i className="feather icon-home"></i></Link></li>
                            <li className="breadcrumb-item"><Link to="#">Ayarlar</Link></li>
                            {/* <li className="breadcrumb-item active">Transkript Listesi</li> */}
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
                    <h5>Ayarlar</h5>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className="col-md-12">
                            <form
                                onSubmit={handleSubmit}
                                className="screen1form">

                                <div className="settings-form-fields">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label>Kullanıcı Adı</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="user-name" placeholder="Kullanıcı Adı" onChange={handleChange('userId')} />

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Kullanıcı Şifre</label>
                                            <div className="settings-form-group">
                                                <input type="password" className="user-pass" placeholder="Şifre" onChange={handleChange('password')} />

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Firma Adı</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-name" placeholder="Firma Adı" onChange={handleChange('userId')} />

                                            </div>
                                        </div>
                                        <div className='col-md-8'>
                                            <label>Firma Adresi</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="firm-address" placeholder="Firma Adresi" onChange={handleChange('userId')} />

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Domain Adresi</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="domain-address" placeholder="Domain Adresi" onChange={handleChange('userId')} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Firma Telefon1</label>
                                            <div className="settings-form-group">
                                                <input type="number" className="firm-phone" placeholder="Firma Telefon1" onChange={handleChange('userId')} />

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Firma Telefon2</label>
                                            <div className="settings-form-group">
                                                <input type="number" className="firm-phone" placeholder="Firma Telefon2" onChange={handleChange('userId')} />

                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <label>Mail Adresi</label>
                                            <div className="settings-form-group">
                                                <input type="email" className="firm-email" placeholder="Mail Adresi" onChange={handleChange('userId')} />

                                            </div>
                                        </div>





                                        <div className='col-md-4'>
                                            <label>IBAN No</label>
                                            <div className="settings-form-group">
                                                <input type="text" className="iban-no" placeholder="IBAN No" onChange={handleChange('userId')} />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='col-md-6'>
                                                <label>Firma Logosu</label>
                                                <img className='settingsImage' src={logo} />
                                                <div className="settings-form-group">

                                                    <input type="file" className="firm-logo" placeholder="firma logosu" onChange={handleChange('userId')} />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Slider Resmi</label>
                                                <img className='settingsImage' src={logo} />
                                                <div className="settings-form-group">

                                                    <input type="file" className="firm-logo" placeholder="Slider Resmi" onChange={handleChange('userId')} />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                {/* <input type="submit" value="Sign Up" className="submit-buttonAdminlogin" /> */}
                                {loading && <input type="submit" value="Bekliyor" disabled className="settings-button" />}
                                {!loading && <input type="submit" value="Kaydet" className="settings-button" />}
                                {error && <p>{error}</p>}
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Settings;
