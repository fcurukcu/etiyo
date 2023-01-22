import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer';
import Product from '../../Components/Product/Product';
import Slider from '../../Components/Slider/Slider';

class Home extends Component {
  constructor(props)
  {
    super(props)
   
    
  }
  render() {
    return (
    <div>

        <Slider/>
        
        
        <Product url={this.props.url} urlFonk={this.props.urlChange} product={this.props.product}/>
        
       
      </div>
    )
  }
}
export default Home;
