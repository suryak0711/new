import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Adminhead from "./adminhead";
import { Toolbar } from "@mui/material";
import Box from '@mui/material/Box';
import Adminfoot from "./adminfoot";
export default function Usercontact() {
    const [emplist,setEmpList]=useState([]);
    const [error,setError]=useState('');
  
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await Axios.get("http://localhost:3001/ucon");
                    setEmpList(response.data);
                } catch (err) {
                    setError('Failed to fetch data');
                    console.error('Error fetching data:', err);
                }
            };
    
            fetchData();
        }, []);
        
    const drawerWidth = 240;
  return (
        <>
        <Adminhead/>
        <Toolbar/>
        <Box sx={{ display: 'flex',background:'#ccc',height:'auto' }}>
        <Adminhead/>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <div className="container">
                {error && <p>{error}</p>}
                <div class="table-title">
                    <h3>User Feedback</h3>
                </div>
                <table className="layout display responsive-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emplist.map((val) => (
                            <tr key={val.id}>
                                <td className="organisationnumber">{val.id}</td>
                                <td className="organisationnumber">{val.name}</td>
                                <td className="organisationnumber">{val.email}</td>
                                <td className="organisationnumber">{val.phno}</td>
                                <td className="organisationnumber">{val.subject}</td>
                                <td className="organisationnumber">{val.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </Box>
            </Box>
            <Adminfoot/>
        </>
  )
}
