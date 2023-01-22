import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
import { getUser } from '../../Utils/Common';
const Sidebar = ({page}) => {
  const [show, setShow] = useState(false);
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const user=getUser();
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
            <Link to='/admin' className={"nav-linkadmin underline" + (url === "/admin" ?"nav-linkadmin active" : "")}>
              <i className={`fas fa-home nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
              <span className='nav-link-name'>Anasayfa</span>
            </Link>
            <Link to='/admin/templates' className={"nav-linkadmin underline" + (url === "/admin/templates" ?"nav-linkadmin active" : "")}>
              <i className={`fas fa-th-large nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
              <span className='nav-link-name'>Temalar</span>
            </Link>
            <Link to='/admin/orders' className={"nav-linkadmin underline" + (url === "/admin/orders" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-shopping-basket  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Siparişler</span>
              </Link>
              <Link to='/admin/products' className={"nav-linkadmin underline" + (url === "/admin/products" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Ürünler</span>
              </Link>
              <Link to='/admin/categories' className={"nav-linkadmin underline" + (url === "/admin/categories" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-columns  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Kategoriler</span>
              </Link>
              <Link to='/admin/settings' className={"nav-linkadmin underline" + (url === "/admin/settings" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-cog  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Ayarlar</span>
              </Link>
              <Link onClick={() =>window.open('http://localhost:3001/template/'+user.id, '_blank', 'noopener,noreferrer')} className="nav-linkadmin">
              <i className={`fa-solid fa-sitemap  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Web Sitem</span>
              </Link>

              <Link to='/admin/support' className={"nav-linkadmin underline" + (url === "/admin/support" ?"nav-linkadmin active" : "")}>
              <i className={`fa-solid fa-question-circle   nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
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