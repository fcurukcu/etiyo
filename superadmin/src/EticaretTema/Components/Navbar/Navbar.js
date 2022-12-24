import React from 'react';
import './NavbarTema.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import logo from '../../../Assets/Orneklogo.png';
function navbar() {
  return (
    <div className='NavbarEticaretTema'>

   <div className='headerEticaretTema'>
      <div className='logoEticaretTema'>
           <a href='#'><img src={logo}/></a>
      </div>
      <div className='searchEticaretTema'>
         <form>
            <input type="text" placeholder="Search Here"/>
         </form>
      </div>
      <div className='iconsEticaretTema'>
          <a href='#'><FontAwesomeIcon icon={faUser} className="EticareticonFa"/>Hesabım</a>
          <a href='#'><FontAwesomeIcon icon={faHeart} className="EticareticonFa"/>Favorilerim</a>
          <a href='#'><FontAwesomeIcon icon={faShoppingCart} className="EticareticonFa"/>Sepetim</a>
        
        
      </div>
   </div>
   <div className='linksEticaretTema' style={{ textAlign: 'center'}}>
   
      <div className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"> Kadın </a>
				<div className="dropdown-menu">
					<a href="#" data-toggle="dropdown" className="dropdown-submenu">Elbise</a>
                     <div className="dropdown-menu">
                     <a href="#" className="dropdown-item">Elbise</a>
                     <a href="#" className="dropdown-item">Aksesuar & Çanta</a>
                     <a href="#" className="dropdown-item">Ayakkabı</a>
                     
                  </div>
					<a href="#" className="dropdown-item">Aksesuar & Çanta</a>
					<a href="#" className="dropdown-item">Ayakkabı</a>
					
				</div>
			</div>
      <a href='#' className='nav-item nav-link'>Erkek</a>
      <a href='#' className='nav-item nav-link'>Anne & Çocuk</a>
      <a href='#' className='nav-item nav-link'>Ayakkabı & Çanta</a>
      <a href='#' className='nav-item nav-link'>Saat & Aksesuar</a>

      <div className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"> Elektronik </a>
				<div className="dropdown-menu">
					<a href="#" className="dropdown-item">Telefon</a>
					<a href="#" className="dropdown-item">Tablet</a>
					<a href="#" className="dropdown-item"> Akıllı Saat</a>
					
					<a href="#" className="dropdown-item">Televizyon</a>
				</div>
			</div>
    
      
   </div>
   </div>
  )
}

export default navbar
