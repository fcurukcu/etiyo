import React,{useState} from 'react'
import './Login.css';
import logo from '../../Assets/logo.png';
import {Link as LinkRouter, useNavigate,} from 'react-router-dom';
import {Button} from '@mui/material';
import {setUserSession} from '../../Utils/Common';
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
            setLoading(false);
            setError(null);
            setUserSession('testtttt',JSON.stringify({"user":values.userId}),'lecturer');
            navigate('/');
      
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
        <div className='containerAdminlogin'>
        <section id="section-wrapperAdminlogin">
          <div className="box-wrapperAdminlogin">
            <div className="form-boxAdminlogin">
            <form 
        onSubmit={handleSubmit}
        className="screen1form">
                <img className='etiyoLogoAdminlogin' src={logo} />
                <div className="form-fieldsAdminlogin">
              
                  <div className="form-group">
                    <input type="text" className="username" placeholder="Username"  onChange={handleChange('userId')} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="user-pass" placeholder="Password" onChange={handleChange('password')} />
                  </div>
                 
  
                </div>
                {/* <input type="submit" value="Sign Up" className="submit-buttonAdminlogin" /> */}
                {loading && <Button className="submit-buttonAdminlogin" disabled variant="outlined" type="submit" color="info" size="large" sx={{mt:0}}>Bekliyor</Button>}
                    {!loading && <Button className="submit-buttonAdminlogin" variant="outlined" type="submit" color="info" size="large" sx={{mt:0}}>Login</Button>}
                    {error && <p>{error}</p>}
              </form>
            
            </div>
  
          </div>
        </section>
      </div>
    )
  
}

export default Login;