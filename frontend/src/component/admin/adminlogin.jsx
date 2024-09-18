import React,{useState} from 'react'
import Container from '@mui/material/Container';
import { FaUserSecret } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
function Adminlogin() {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const Login = (e) => {
        e.preventDefault();
    
        Axios.post("http://localhost:3001/login", {
            uname: uname,
            pass: pass
        })
        .then((res) => {
            if (res.data.login) {
                navigate('/admin/admindash');
            } else {
                alert("login failed");
            }
        })
        .catch(err => {
            alert("Error occurred", err);
        });
    }
  return (
     <>
      <Container maxWidth="xl"  style={{background:'#282c345e',height:'100vh'}}>
      <div className="login-container">
            <form  className="login-form" onSubmit={Login}>
                <h2>Admin Panel</h2>
                <FaUserSecret style={{marginLeft:'130px',fontSize:'60px'}}/>
                <div className="input-group">
                    <label htmlFor="Text">Username</label>
                    <input 
                        type="text" 
                        id="text" 
                        placeholder='Username'
                        onChange={(e)=>{setUname(e.target.value)}}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder='Password'
                        onChange={(e)=>{setPass(e.target.value)}}
                        required 
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
        </Container>
    </>
  )
}
export default Adminlogin