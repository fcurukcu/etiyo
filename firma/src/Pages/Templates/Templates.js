import React, { Component } from 'react'
import logo from '../../Assets/logo.png';
import {getUser,setUserTokenSession} from '../../Utils/Common';
import axios from "axios";
import { Link } from 'react-router-dom';
class Templates extends Component {
   
    constructor(props) {
        super(props);
        this.state = { checked:1 }
        this.handleCheck = this.handleCheck.bind(this);
      }
    
      handleCheck(e){
       this.setState({
        checked: e.target.checked
       })


     }
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
        }).catch(err=>{
            // if(err.response.status===401 || err.response.status===400)
            // {
            //     setError(err.response.message);
            // }
            // else
            // {
            //     setError("somethinh went WrongLocation.Please try again later");
            // }
            
        })
    }
   
    render() {
        this.firmaBilgileriGetir();
        const openInNewTab = url => {
            // 👇️ setting target to _blank with window.open
            window.open(url, '_blank', 'noopener,noreferrer');
          };
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

                        {[...Array(1)].map((x, i) =>
                            {
                              
                                return (
                                    <div key={i+1} className='col-md-3'>
                                        <div className="card  mt-3">
                                            <div className="card-header">
                                                <h5>Tema {i+1}</h5>
                                            </div>
                                            <div className="card-body" style={{display:'flex',flexDirection: "column"}}>
                                            <Link onClick={() => openInNewTab('http://localhost:3001/template/0')}><img src={logo} className='firmalogomuz' style={{marginLeft: "auto",marginRight: "auto"}}/></Link>
                                        <input className="allMessageInput mt-3" 
                                         checked={this.state.checked===i+1} onChange={this.handleCheck}  type="checkbox" data-indeterminate="false" />
                            
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                          
                        )}

                        

                         
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Templates;
