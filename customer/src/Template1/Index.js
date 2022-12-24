import React, { Component } from 'react';
import './Assets/Css/animate.css';
import './Assets/Css/bootstrap.css';
import './Assets/Css/flex-slider.min.css';
import './Assets/Css/font-awesome.css';
import './Assets/Css/jquery-ui.css';
import './Assets/Css/jquery.fancybox.min.css';
import './Assets/Css/magnific-popup.css';
import './Assets/Css/magnific-popup.min.css';
import './Assets/Css/nice-select.css';
import './Assets/Css/niceselect.css';
import './Assets/Css/owl-carousel.css';
import './Assets/Css/reset.css';
import './Assets/Css/responsive.css';
import './Assets/Css/slicknav.min.css';
import './Assets/Css/style.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import FreeVersionBanner from './Components/FreeVersionBanner/FreeVersionBanner';
// import './Assets/Js/active';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './Assets/Js/easing';
// import './Assets/Js/facnybox.min';
// import './Assets/Js/finalcountdown.min';
// import './Assets/Js/flex-slider';
// // import './Assets/Js/gmap.min';
// import './Assets/Js/jquery-migrate-3.0.0';
// import './Assets/Js/jquery-ui.min';
// import './Assets/Js/jquery.min';
// import './Assets/Js/magnific-popup';
// import './Assets/Js/map-script';
// import './Assets/Js/nicesellect';
// import './Assets/Js/onepage-nav.min';
// import './Assets/Js/owl-carousel';
// import './Assets/Js/popper.min';
// import './Assets/Js/scrollup';
// import './Assets/Js/slicknav.min';
// import './Assets/Js/waypoints.min';
// import './Assets/Js/ytplayer.min';
// import './Assets/Fonts/fontawesome-webfont.eot';
// import './Assets/Fonts/fontawesome-webfont.svg';
// import './Assets/Fonts/fontawesome-webfont.ttf';
// import './Assets/Fonts/fontawesome-webfont.woff';
// import './Assets/Fonts/fontawesome-webfont.woff2';
// import './Assets/Fonts/themify.eot';
// import './Assets/Fonts/themify.svg';
// import './Assets/Fonts/themify.ttf';
// import './Assets/Fonts/themify.woff';
import Header from './Components/Header/Header';
import MidiumBanner from './Components/MidiumBanner/MidiumBanner';
import PopularProct from './Components/PopularProct/PopularProct';
import Product from './Components/Product/Product';
import Slider from './Components/Slider/Slider';

class Index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        
        {/* <Banner/> */}
        <Product/>
        
        {/* <MidiumBanner/> */}
        {/* <PopularProct/> */}
        {/* <FreeVersionBanner/> */}
        <Footer/>
      </div>
    )
  }
}
export default Index;