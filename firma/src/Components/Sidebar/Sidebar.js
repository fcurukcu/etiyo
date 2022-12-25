import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Sidebar.css';
import logo from '../../Assets/logo.png';
import Navbar from '../Navbar/Navbar';
const Sidebar = ({page}) => {
  const [show, setShow] = useState(false);

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
            <Link to='/admin' className='nav-linkadmin active'>
              <i className={`fas fa-th-large nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
              <span className='nav-link-name'>Anasayfa</span>
            </Link>
            <Link to='/admin/templates' className='nav-linkadmin active'>
              <i className={`fas fa-th-large nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
              <span className='nav-link-name'>Temalar</span>
            </Link>
            <Link to='/admin/orders' className='nav-linkadmin'>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Siparişler</span>
              </Link>
              <Link to='/admin/products' className='nav-linkadmin'>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Ürünler</span>
              </Link>
              <Link to='/admin/categories' className='nav-linkadmin'>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Kategoriler</span>
              </Link>
              <Link to='/admin/settings' className='nav-linkadmin'>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Ayarlar</span>
              </Link>
              <Link to='/admin/web-site' className='nav-linkadmin'>
              <i className={`fa-solid fa-bag-shopping  nav-link-icon ${show ? 'nav-link-icon-show' : null}`}></i>
                <span className='nav-link-name'>Web Sitem</span>
              </Link>

              <Link to='/admin/support' className='nav-linkadmin'>
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