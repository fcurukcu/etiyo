import { BrowserRouter,Route,Routes} from 'react-router-dom';
import React, {Fragment} from 'react';
import PrivateRoute from './Utils/PrivateRoute';
import Anasayfa from './Pages/Dashboard/Anasayfa';
import Musteriler from './Pages/Musteriler/Musteriler';
import Destek from './Pages/Destek/Destek';
import Login from './Pages/Login/Login';
import HomePage from './WebSitesi/Pages/HomePage';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import SingUp from './Pages/SingUp/SingUp';
import './App.css';
import Templates from './Pages/Templates/Templates';
import Orders from './Pages/Orders/Orders';
import Products from './Pages/Products/Products';
import Categories from './Pages/Categories/Categories';
import Settings from './Pages/Settings/Settings';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Fragment>
        <Routes>
       
          <Route exact path='/admin' element={<PrivateRoute/>}>
          <Route exact path='/admin' element={<Anasayfa />} />
           <Route exact path='/admin/orders' element={<Orders />} />
            <Route exact path='/admin/products' element={<Products/>} />
            <Route exact path='/admin/categories' element={<Categories/>} />
            <Route exact path='/admin/support' element={<Destek/>} />
            <Route exact path='/admin/settings' element={<Settings/>} />
            {/* <Route exact path='/admin/web-site' element={<Destek/>} /> */}
            <Route exact path='/admin/templates' element={<Templates/>} />
          </Route>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route exact path='/singup' element={<SingUp/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>

    </div>
  );
}

export default App;