
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components/navbar/Header'
export const PrivateRoute = () => {
    const auth = JSON.parse(localStorage.getItem('token')) ?? false
   
    return auth ?
     <>
    <Header/>
    <Outlet/> 
    </> :
     <Navigate replace to="/"/>
}