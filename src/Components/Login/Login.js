import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input id='submit' type="button" value="Login" />
            </form>
            <Link to="/signup">Are You New Here ? <span>Create an Account</span></Link>
        </div>
        </div>
    );
};

export default Login;