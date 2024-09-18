import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Adjust path as necessary
import { useNavigate } from 'react-router-dom';
import Footer from './userfooter';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Get login function from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/ulogin', { username, password });
      alert(response.data.message);
      login(username); // Set the user in context
      navigate('/'); // Redirect to home or other page
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <>
      <div className='container1'>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className='form1'>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit" className='button1'>Login</button>
        </form>
        <p style={{ textAlign: 'center' }}>Create a New Account? <Link to="/Register">Register</Link></p>
      </div>
      <Footer />
    </>
  );
}

export default Login;
