
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
import axios from 'axios';
import ProductDetail from './Template1/Components/Product/ProductDetail';
// import ForgetPassword from './pages/forgotpassword/ForgotPassword';
// import Login from './pages/login/Login';
// import PrivateRoute from './Utils/PrivateRoute';
// import { getType } from './Utils/Common';
class App extends Component {
  constructor(props)
  {
    super(props)
    this.urlChange=this.urlChange.bind(this);
    if(window.location.pathname==='/template/0')
    {
      localStorage.setItem('firmId',14);
      window.open('/');
      // console.log("buraya girdi");
    }
  }
  state={
    url:window.location.pathname,
    category:null,
    sepet:null,
    product:null
  }

  componentDidMount()
  {
      const firmId=localStorage.getItem('firmId');
      axios.get(`https://localhost:44363/urunkategori/liste/`+firmId)
      .then(res => {
        const category = res.data.response;
        this.setState({ category:category });
        // console.log(category);
      })

      axios.get(`https://localhost:44363/firmaurun/liste/` + firmId)
      .then(res => {
          const product = res.data.response;
          this.setState({ product: product });
      })

  }

  urlChange=(url)=>{
   
     useState({url:url});
  }

  sepeteEkle=(row)=>{
    console.log("sepeti")
  }
  sepetenCikar=(row)=>{
    console.log("sepet cikar")
  }
  render() {

  return (
    <div>
      
      
      <BrowserRouter>
      <Header url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category}  sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>
      <Fragment>
        <Routes>
          {/* <Route exact path='/' element={<PrivateRoute/>}>
            {
            getType()==='student'?
            <Route exact path='/' element={<Enrollment2/>}/>:
            <Route exact path='/' element={<ForgetPassword/>}/>
            }

          </Route> */}
          <Route exact path='/' element={<Home url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>}/>
          <Route exact path='/basket' element={<Basket url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>}/>
          <Route exact path='/product-detail/:id' element={<ProductDetail kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product} />}/>
          <Route exact path='/product-payment' element={<ProductPayment url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>}/>
          <Route exact path='/contact' element={<Contact url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} product={this.state.product}/>}/>
          <Route exact path='/aboutus' element={<Index />}/>
          <Route exact path='/products' element={<Products url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>}/>
          <Route exact path='/products/:categoryid' element={<Products url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>}/>
          <Route exact path='/login' element={<Login url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} sepeteEkle={this.sepeteEkle} sepeteCikar={this.sepetenCikar} product={this.state.product}/>}/>
          <Route exact path='/template/:firmid' element={<Home url={this.state.url} urlFonk={this.urlChange} kategoriler={this.state.category} product={this.state.product}/>}/>
        </Routes>
      </Fragment>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}
}

export default App;
