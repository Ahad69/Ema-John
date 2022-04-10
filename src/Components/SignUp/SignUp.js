import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password)
    const [name, setName] = useState('')

    const [createUserWithEmailAndPassword  , user , loading ,  error] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathaname || '/shop'

    const handleName = event =>{
    setName(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleEmail =  event =>{
        setEmail(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('clicked')
        
        createUserWithEmailAndPassword(email, password)
    }
    useEffect(()=>{
        if(user){
            navigate(from , {})
        }
    })
    
    return (
        <div className='form-container'>
        <div className='form'>
        <h1>Sign Up</h1>
        <p>{error?.message}</p>
        <form onSubmit={handleSubmit}>
            {/* <input onBlur={handleName} type="text" placeholder='Name' /> */}
            <br />
            <input onBlur={handleEmail} type="text" placeholder='Email' />
            <br />
            <input onBlur={handlePassword} type="password" placeholder='Password' />
            <br />
            <input id='submit' type="submit" value="Sign Up"  />
        </form>
        <Link to="/login">Already a Member ? <span>Please Login</span></Link>
        <br />
        <button> Google</button>
    </div>
    
    </div>
    );
};

export default SignUp;