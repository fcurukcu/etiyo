import { BrowserRouter,Route,Routes} from 'react-router-dom';
import React, {Fragment} from 'react';
import PrivateRoute from './Utils/PrivateRoute';
import Anasayfa from './Pages/Dashboard/Anasayfa';
import Musteriler from './Pages/Musteriler/Musteriler';
import Destek from './Pages/Destek/Destek';
import Login from './Pages/Login/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
             <Route exact path='/' element={<Anasayfa/>} />
            <Route exact path='/musteriler' element={<Musteriler />} />
            <Route exact path='/destek' element={<Destek/>} />
          </Route>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>

    </div>
  );
}

export default App;