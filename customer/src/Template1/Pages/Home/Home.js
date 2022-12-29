import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer';
import Product from '../../Components/Product/Product';
import Slider from '../../Components/Slider/Slider';

class Home extends Component {
  render() {
    return (
    <div>
        {/* <Header/> */}
        <Slider/>
        
        {/* <Banner/> */}
        <Product url={this.props.url} urlFonk={this.props.urlChange} product={this.props.product}/>
        
        {/* <MidiumBanner/> */}
        {/* <PopularProct/> */}
        {/* <FreeVersionBanner/> */}
        {/* <Footer/> */}
      </div>
    )
  }
}
export default Home;
