import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './userfooter';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [passwordError, setPasswordError] = useState('');
 
  const navigate = useNavigate();


  const validatePassword = (password) => {

    const passwordPattern = /^(?=.[A-Z])(?=.[!@#$%^&])(?=.[a-zA-Z0-9]).{8,}$/;
    return passwordPattern.test(password);
  };

  const addemp = (e) => {
    e.preventDefault(); 

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long, include 1 uppercase letter, 1 special character, and alphanumeric characters');
      return;
    } else {
      setPasswordError('');
    }

    Axios.post("http://localhost:5000/register", {
        username: username,
        email: email,
        password: password,
        address: address,
    })
    .then((response) => {
       alert('Registration successful!');
       navigate('/login'); 
    })
    .catch((error) => {
       console.error('There was an error!', error);
       alert('Registration failed. Please try again.');
    });
  };

  return (
    <>
    <div className='container1'>
      <h2>Register</h2>
      <form onSubmit={addemp} className='form1'>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='input1'
        />
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='input1'
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='input1'
        />
        {passwordError && <p className='error-message'>{passwordError}</p>} {/* Display password error */}
        <textarea
          placeholder="Address" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className='input1'
        />
        <button type="submit" className='button1'>Register</button>
        <p style={{textAlign: 'center'}}>Already have a New Account? <Link to="/userlogin">Login</Link></p>
      </form>
      
    </div>
    <Footer />
    </>
  );
}

export default Register;