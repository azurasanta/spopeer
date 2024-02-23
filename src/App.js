import logo from './logo.svg';
import './App.css';
import Nav from './Components/Layout/Nav';
import LandingPage from './Pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Singup/Singup';
import { Dashboard } from './Components/dashboard';

function App() {
  return (
    <div className='flex flex-col'>
        <Routes>
          <Route path="/" exact Component={LandingPage}></Route>
          <Route path="/signin" Component={Signin}></Route>
          <Route path="/signup" Component={Signup}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
    </div>
  );
}

export default App;
