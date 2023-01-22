import React, { useState,useEffect } from 'react';
import { Link,useLocation} from 'react-router-dom';
import './Sidebar.css';
import logo from '../../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
const Sidebar = ({page}) => {
  const [show, setShow] = useState(false);
  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
   
     <>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
        <div>
            <Navbar/>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='navAdmin'>
            <img src={logo} className={`firmalogomuz ${show ? 'firmalogomuzshow' : null}`}/>
          <div style={{height: "90vh"}}>
           

            <div className='nav-listadmin'>
            <Link to='/'  className={"nav-linkadmin underline" + (url === "/" ?"nav-linkadmin active" : "")}>
              <i className={`fas fa-th-large nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
              <span className='nav-link-name'>Anasayfa</span>
            </Link>
              <Link to='/musteriler' className={"nav-linkadmin underline" + (url === "/musteriler" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-pen-to-square nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Müşteriler</span>
              </Link>
              <Link to='/destek' className={"nav-linkadmin underline" + (url === "/destek" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Destek</span>
              </Link>
             
            </div>
          </div>

          <Link to='/logout' className='nav-linkadmin'>
          <i className={`fas fa-sign-out nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
        
      </aside></>
   
   
  
   
    
  );
};

export default Sidebar;