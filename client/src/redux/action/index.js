import axios from 'axios'
import { toast } from 'react-toastify';
import {  getData, loginData } from './actionCreators';



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
export const loginUser = (value)=>{
    return async dispatch =>{
        try{
            let {data} = await axios.post("http://localhost:8000/login",value)
            dispatch(loginData(data))
            localStorage.setItem('token',JSON.stringify(data.token))
            return { login: true };
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
            dispatch(getData(res.data))
        }
        catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }
}