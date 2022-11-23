import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './components/authentication/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
// import { PrivateRoute } from './privateroute/PrivatRoute';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState("")
  useEffect(() => {
    const token = localStorage.getItem('Token');
    setToken(token);
  }, [token])

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Link to={'/login'} >Login</Link>
      {token ?
        <Link to={'/home'} >Home</Link> :
        <Link to={'/login'} >Login</Link>

      } */}
        <Routes>
          <Route exact path='/login' element={<Login />} />

          {token ? (
            <Route path='/home' element={<Home />} />) : (
            <Route path='/' element={<Login />} />)
          }

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
