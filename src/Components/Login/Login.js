import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {  useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password)

    const [signInWithEmailAndPassword ,user,loading ,error] = useSignInWithEmailAndPassword(auth);
   

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathaname || '/shop'

    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleEmail =  event =>{
        setEmail(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(error){
            console.log(error)
        }
        
        signInWithEmailAndPassword( email, password)
        .then(
            
        )
    }


    if(user){
        navigate(from, {replace:true});
    }



    return (
        <div className='form-container'>
            <div className='form'>
            <h1>Login</h1>
            
            
            
            <form onSubmit={handleSubmit}>
                <input onBlur={handleEmail} type="text" placeholder='Email' />
                <br />
                <input onBlur={handlePassword} type="password" placeholder='Password' />
                <br />
                <p>{error?.message}</p>
                <br />
                <input id='submit' type="submit" value="Login" />
            </form>
            <Link to="/signup">Are You New Here ? <span>Create an Account</span></Link>
        </div>
        </div>
    );
};

export default Login;