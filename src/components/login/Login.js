import React from 'react';
import Logo from '../../images/icons/ironNotes(Darkmode).png';
import LoginForm from '../login/LoginForm';
import './Login.css';

function Login() {
    return (
        <div>
           
            <img className="image" style={{width: '300px'}} src={Logo} alt="Logo" />
            <LoginForm />
            </div>
            
        
            
            
        
    )
}

export default Login;