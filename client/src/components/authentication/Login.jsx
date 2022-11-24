import React, { useState } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import {useDispatch } from 'react-redux'
import { registerUser,loginUser } from '../../redux/action/index';
import { useNavigate } from 'react-router-dom';


const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled("p")({
    color:"red",
    fontSize:"12px",
    fontWeight:"bold",
    fontFamily:'sans-serif'
})

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

export default function Login()  {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [account, toggleAccount] = useState('login');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const dispatch = useDispatch()
    
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
  
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }


    const loginHandler = async(e) => {
        e.preventDefault()
        let res
         if (!login.username) {
            setErrors({ username: "Please Enter Your Username " })
        }
        else if (!login.password) {
            setErrors({ password: "Please Enter Your Password" })
        }else{
         res = await dispatch(loginUser(login))
            setLogin(loginInitialValues)
            setErrors('')
            if(res.login === true){
                navigate("/home")
            }
        }
    }

    const signupUser = (e) => {
        e.preventDefault()
        if (!signup.name) {
            setErrors({ name: " Please Enter Your Name" })
        }
        else if (!signup.username) {
            setErrors({ username: "Please Enter Your Username " })
        }
        else if (!signup.password) {
            setErrors({ password: "Please Enter Your Password" })
        }
        else {
            dispatch(registerUser(signup))
            setSignup(signupInitialValues)
            setErrors('')
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
        setLogin(loginInitialValues)
        setSignup(signupInitialValues)
        setErrors("")
    }

    

    return (

        <Component id="main">
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField type="text" variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            {errors.username ? <Error className='error'>{errors.username}</Error> : ""}
                            <TextField type="text" variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            {errors.password ? <Error className='error'>{errors.password}</Error> : ""}
                            <LoginButton variant="contained" onClick={(e) => loginHandler(e)} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField type="text" variant="standard" value={signup.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            {errors.name ? <Error className='error'>{errors.name}</Error> : ""}
                            <TextField type="text" variant="standard" value={signup.username} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            {errors.username ? <Error className='error'>{errors.username}</Error> : ""}
                            <TextField type="text" variant="standard" value={signup.password} onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            {errors.password ? <Error className='error'>{errors.password}</Error> : ""}
                            <SignupButton onClick={(e) => signupUser(e)} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>

    )
}



