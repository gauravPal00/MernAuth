import axios from 'axios'
import { toast } from 'react-toastify';
import {  loginData } from './actionCreators';



// user register Api
export const registerUser = (data) => {
    return async dispatch =>{
        try{
            let res = await axios.post("http://localhost:8000/register",data)
            toast.success(res.data.message)
        }catch(error){
            toast.error(error.response.data)
        }
    }
}

// login api user
export const loginUser = (data)=>{
    return async dispatch =>{
        try{
            let res = await axios.post("http://localhost:8000/login",data)
            dispatch(loginData(res.data))
            localStorage.setItem("token",JSON.stringify(res.data.token))
            return res.data
        }
        catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
}

// get data of user

export const getUserdata = (data)=>{
    return async dispatch => {
        try{
            let res = await axios.get("http://localhost:8000/welcome",{
                headers: {
                   "auth-token": data
                  }
            })
            // dispatch(getData(res.data))
            console.log(res);
        }
        catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
}