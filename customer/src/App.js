
import React, {Component, Fragment, useState} from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Index from './Template1/Index';
import Contact from './Template1/Pages/Contact/Contact';
import Header from './Template1/Components/Header/Header';
import Home from './Template1/Pages/Home/Home';
import Footer from './Template1/Components/Footer/Footer';
import Products from './Template1/Pages/Products/Products';
import Basket from './Template1/Pages/Basket/Basket';
import ProductPayment from './Template1/Pages/ProductPayment/ProductPayment';
import Login from './Template1/Pages/Login/Login';

// import ForgetPassword from './pages/forgotpassword/ForgotPassword';
// import Login from './pages/login/Login';
// import PrivateRoute from './Utils/PrivateRoute';
// import { getType } from './Utils/Common';
class App extends Component {
  constructor(props)
  {
    super(props)
    this.urlChange=this.urlChange.bind(this);
  }
  state={
    url:window.location.pathname
  }
  urlChange=(url)=>{
    console.log(url);
     useState({url:url});
  }
  render() {

  return (
    <div>
      
      
      <BrowserRouter>
      <Header url={this.state.url} urlFonk={this.urlChange}/>
      <Fragment>
        <Routes>
          {/* <Route exact path='/' element={<PrivateRoute/>}>
            {
            getType()==='student'?
            <Route exact path='/' element={<Enrollment2/>}/>:
            <Route exact path='/' element={<ForgetPassword/>}/>
            }

          </Route> */}
          <Route exact path='/' element={<Home url={this.state.url} urlFonk={this.urlChange}/>}/>
          <Route exact path='/basket' element={<Basket url={this.state.url} urlFonk={this.urlChange}/>}/>
          <Route exact path='/product-detail/:category/:id' element={<Index/>}/>
          <Route exact path='/product-payment' element={<ProductPayment url={this.state.url} urlFonk={this.urlChange}/>}/>
          <Route exact path='/contact' element={<Contact url={this.state.url} urlFonk={this.urlChange}/>}/>
          <Route exact path='/aboutus' element={<Index/>}/>
          <Route exact path='/products' element={<Products url={this.state.url} urlFonk={this.urlChange}/>}/>
          <Route exact path='/login' element={<Login url={this.state.url} urlFonk={this.urlChange}/>}/>
        </Routes>
      </Fragment>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}
}

export default App;
