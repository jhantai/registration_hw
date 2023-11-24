import React from 'react';
import './login.css'
 import App from "../App";
const Login = ({setLogin}) => {
    return (
        <div className='form'>
            <input type="text"placeholder='login'  />
            <input type="text" placeholder='password'/>
        </div>
    );
};

export default Login;