import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/action/actionCreators'

export const Header = () => {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token")
        dispatch(logoutUser())
        naviagte("/login")
    }
  return (
   <AppBar>
    <Toolbar>
        <Typography>HELLO User</Typography>
        <Button style={{marginLeft:"10px"}} variant='contained' color='error' onClick={()=>logout()}>LOGOUT</Button>
    </Toolbar>
   </AppBar>
  )
}
