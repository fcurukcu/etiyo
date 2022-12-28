import React,{useState} from 'react'
import './Login.css';
import logo from '../../Assets/logo.png';
import {json, Link as LinkRouter, useNavigate,} from 'react-router-dom';
import {Button} from '@mui/material';
import {setUserSession} from '../../Utils/Common';
import axios from "axios";
function Login(){
  
    const navigate = useNavigate();
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [values,setValues]=useState({
        userId:'',
        password:'',
        showPassword:false
    })

    const handleChange=(prop)=>(event)=>{
        setValues({
            ...values,[prop]:event.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError(null);
        setLoading(true);
     
        ////// apiye bağlandıktan sonra 
           
      
            axios.post('https://localhost:44363/firma/login',{
                kullanici_adi:values.userId,sifre:values.password
            }).then((res)=>{
                setLoading(false);
                if(res.data.status===200)
                {
                    
                    setError(null);
                    setUserSession(res.data.response.token,JSON.stringify(res.data.response));
                    navigate('/admin');
                }
                else
                {
                    setError(res.data.response);
                }
            }).catch(err=>{
                setLoading(false);
                if(err.response.status===401 || err.response.status===400)
                {
                    setError(err.response.message);
                }
                else
                {
                    setError("somethinh went WrongLocation.Please try again later");
                }
                
            })
        
   
        // login(values.userId,values.password);
    }
    return (
      <div className='containerLogin'>
          <section id="section-wrapper">
        <div className="box-wrapper">
            <div className="bg-box">
                <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=740&t=st=1668701765~exp=1668702365~hmac=696224ebea5bdfa86a9b2a7b80d01b4c01187bb7406dd525a8f87d56750c9122" alt=""/>
            </div>
            <div className="form-box">
            <form 
        onSubmit={handleSubmit}
        className="screen1form">
                    <img className='etiyoLogo' src={logo}/>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="user-email" placeholder="Username/Email" onChange={handleChange('userId')}/>

                        </div>
                        <div className="form-group">
                            <input type="password" className="user-pass" placeholder="Password" onChange={handleChange('password')}/>
                            
                        </div>
                        <div className="fpass">
                            <span className="fpass-btn"><LinkRouter className="fpassBtnLink" to="/forgetpassword">Forget Password?</LinkRouter></span>
                        </div>
                    </div>
                           {/* <input type="submit" value="Sign Up" className="submit-buttonAdminlogin" /> */}
                {loading && <input type="submit" value="Bekliyor" disabled className="submit-button" />}
                    {!loading && <input type="submit" value="Login" className="submit-button" />}
                    {error && <p style={{    textAlign: "center",marginTop: "10px",color: "red"}}>{error}</p>}
                </form>
                <p className="signin-here">Don't have an account ? <LinkRouter to="/singup">Sing Up</LinkRouter></p>
            </div>
         
        </div>
    </section>
      </div>
    )
 
  
}

export default Login;