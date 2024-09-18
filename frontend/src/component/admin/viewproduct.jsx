import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Adminhead from "./adminhead";
import { Toolbar } from "@mui/material";
import Box from '@mui/material/Box';
import { MdDeleteForever,MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Adminfoot from "./adminfoot";

function View() {
    const [emplist,setEmpList]=useState([]);
    const [error,setError]=useState('');
  
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await Axios.get("http://localhost:3001/viewdata");
                    setEmpList(response.data);
                } catch (err) {
                    setError('Failed to fetch data');
                    console.error('Error fetching data:', err);
                }
            };
    
            fetchData();
        }, []);

        const deldata = (id) => {
            Axios.delete(`http://localhost:3001/delete/${id}`)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data.message);
                        alert("Successfully deleted");
                    }
                })
                .catch(err => {
                    console.error('Error deleting data:', err);
                    alert('Failed to delete data');
                });
        };

        
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
                    <h3>View Products</h3>
                </div>
                <table className="layout display responsive-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Product Type</th>
                            <th>Product Price</th>
                            <th>Product Details</th>
                            <th>Product Image</th>
                            <th colSpan={2} style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emplist.map((val) => (
                            <tr key={val.id}>
                                <td className="organisationnumber">{val.id}</td>
                                <td className="organisationnumber">{val.P_Name}</td>
                                <td className="organisationnumber">{val.Brand}</td>
                                <td className="organisationnumber">{val.P_Type}</td>
                                <td className="organisationnumber">{val.P_Price}</td>
                                <td className="organisationnumber">{val.Detail}</td>
                                <td className="organisationnumber">
                                    <img 
                                        src={`http://localhost:3000/uplods/${val.Img}`} 
                                        alt={val.P_Name} 
                                        style={{ width: '100px', height: 'auto' }} 
                                    />
                                </td>
                                 <td class="edit-item"><button  style={{border:'none',background:'red',fontSize:'25px',color:'white',borderRadius:'5px'}} onClick={()=>deldata(val.id)}><MdDeleteForever/></button></td>
                                 <td class="remove-item" ><Link to={`/admin/editproduct/${val.id}`} style={{border:'none',background:'rgb(30, 204, 68)',fontSize:'25px',color:'white',borderRadius:'5px',padding:'5px'}}><MdOutlineModeEdit/></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </Box>
            </Box>
            <Adminfoot/>
        </>
    );
}

export default View;
