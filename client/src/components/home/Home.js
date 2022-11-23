import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getUserdata } from '../../redux/action'
export const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
         let token = JSON.parse(localStorage.getItem('token')) 
        dispatch(getUserdata(token))
    },[dispatch])
  return (
    <>
    <div>Home</div>
    </>
  )
}
