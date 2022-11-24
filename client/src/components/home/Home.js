import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserdata } from '../../redux/action'
import styled from '@emotion/styled'
import { Box } from '@mui/system'

export const Home = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.LoginReducers)

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    dispatch(getUserdata(token))
  }, [dispatch])

  const Container = styled(Box)`
    color: black;
    margin-top: 70px;
    text-align:center;
    text-align: center;
    font-weight: bolder;
    
    `
  return (
    <Container>Hello {data}</Container>
  )
}
