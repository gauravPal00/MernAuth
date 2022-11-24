import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Login  from './components/authentication/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { PrivateRoute } from './privateroute/PrivatRoute';
import { Error } from './error/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>}/>
          </Route>
         <Route path="*" element={<Error/>} /> 
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
