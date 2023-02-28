import React, { Component } from 'react';
import './iletisim.css';
import logo from '../../../Assets/logo.png';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import { Link, animateScroll as scroll, } from 'react-scroll';
export class Iletisim extends Component {
  render() {
    return (
      <div id='iletisim' className='iletisim'>
        <div className="secContainer container2 grid">
          <div className="logoDiv">
            <div className="iletisimLogo">
              <a href="#" className="logo flex">
                <h1 className='flex'>
                  <img src={logo} alt="" />
                </h1>

              </a>
            </div>
            <div className="socials flex">
              <ImFacebook className="icon" />
              <BsTwitter className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillLinkedin className="icon"/>
            </div>
          </div>
          <div className="iletisimLinks">
              <span className="linkTitle">
              Bilgiler
              </span>
              <li>
            <Link className="a" to="home" smooth={true} duration={500}>Anasayfa</Link>
              
            </li>
            <li>
            <Link className="a" to="firmaUrunleri" smooth={true} offset={-15} duration={500}>Ürünler</Link>
          
            </li>
            <li>
            <Link className="a" to="about" smooth={true} offset={-50} duration={500}>Hakkımızda</Link>
            
            </li>

            <li>
            <Link className="a" to="iletisim" smooth={true} offset={-50} duration={500}>İletişim</Link>
      
            </li>
          </div>
         
          <div className="iletisimLinks">
              <span className="linkTitle">
              Bize Ulaşın
              </span>
              <span className="phone">0555 222 12 12</span>
              <span className="email">etiyo@gmail.com</span>
              
          </div>
        </div>
      </div>
    )
  }
}

export default Iletisim
