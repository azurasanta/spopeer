import logo from './logo.svg';
import './App.css';
import Nav from './Components/Layout/Nav';
import LandingPage from './Pages/LandingPage';
import React, { useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Singup/Singup';
import { EmailVerify } from './Components/Singup/EmailVerify';
import { AuthProvider } from './Components/context/authContext';
// import PrivateRoute from './Components/PrivateRoute';
import WithAuth from './Components/HOC/WithAuth';
import Dashboard from './Components/Dashboard';

function App() {

  return (
    <div className='flex flex-col'>
      <AuthProvider>
        <Routes>
          <Route exact path="/" Component={LandingPage}></Route>
          <Route exact path="/signin" Component={Signin}></Route>
          <Route exact path="/signup" Component={Signup}></Route>
          <Route exact path="/verify" Component={EmailVerify}></Route>
          {/* <Route exact path='/*' element={<PrivateRoute component={Dashboard}/>}></Route> */}
          <Route path='/*' Component={WithAuth(Dashboard)}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
