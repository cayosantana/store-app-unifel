import React, { useState } from 'react';
import './login.css'
import logoEco from './image/logo-flashstore.png'
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const isValid = () => {
    return validateEmail(email) && password.length >= 8;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='container-login'>
      <img src={ logoEco } alt="" />
      <h4>Gostou, comprou. <span>Chegou!</span></h4>
        <form onSubmit={handleSubmit}>
          <label className='login-email'>
            <p>Email:</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className='login-senha'>
            <p>Senha:</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <Link to='/products'><input className='botao' type="submit" value="Login" disabled={!isValid()} /></Link>
        </form>
    </div>
  );
}

export default Login;

