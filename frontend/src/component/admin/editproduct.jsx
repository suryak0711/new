import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import Adminhead from './adminhead'
import Adminfoot from './adminfoot'
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { useParams } from 'react-router-dom';

const drawerWidth = 240;

export default function Editproduct() {
    const { id } = useParams();
    const [emp, setEmp] = useState("");
    const [newList, setNewlist] = useState({
        P_Name: '',
        Brand: '',
        P_Type: '',
        P_Price: '',
        Detail: '',
        Img: ''
    });
    useEffect(() => {
        Axios.get(`http://localhost:3001/read/${id}`)
            .then(response => {
                setEmp(response.data);
                setNewlist({
                    P_Name: response.data.P_Name || '',
                    Brand: response.data.Brand || '',
                    P_Type: response.data.P_Type || '',
                    P_Price: response.data.P_Price || '',
                    Detail: response.data.Detail || '',
                    
                });
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [id]);

    const Updatelist = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Pname', newList.P_Name);
        formData.append('Brand', newList.Brand);
        formData.append('Ptype', newList.P_Type);
        formData.append('PPrice', newList.P_Price);
        formData.append('Detail', newList.Detail);
        formData.append('Img', newList.Img);
    
        Axios.put(`http://localhost:3001/upd/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                alert('Product updated successfully');
            })
            .catch((error) => {
                console.error('Error updating product:', error);
                alert('Failed to update product');
            });
    };
    return (
        <>
            <Box sx={{ display: 'flex', background: '#ccc' }}>
                <Adminhead />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <section className="container2">
                        <header>Update Product</header>
                        <form action="#" className="form">
                            <div className="input-box">
                                <label>Product Id</label>
                                <input type="text" name='id' defaultValue={emp.id} />
                            </div>
                            <div className="input-box">
                                <label>Product Name</label>
                                <input type="text" name='Product name' value={newList.P_Name}
                                    onChange={(e) => setNewlist({ ...newList, P_Name: e.target.value })} />
                            </div>
                            <div className="input-box">
                                <label>Brand Name</label>
                                <input type="text" name='Product Brand' value={newList.Brand}
                                    onChange={(e) => setNewlist({ ...newList, Brand: e.target.value })} />
                            </div>
                            <div className="input-box">
                                <label>Product Type</label>
                                <input type="text" name='Product Type' value={newList.P_Type}
                                    onChange={(e) => setNewlist({ ...newList, P_Type: e.target.value })} />
                            </div>
                            <div className="input-box">
                                <label>Product Price</label>
                                <input type="text" name='Product Price' value={newList.P_Price}
                                    onChange={(e) => setNewlist({ ...newList, P_Price: e.target.value })} />
                            </div>
                            <div className="input-box">
                                <label>Product Description</label>
                                <textarea name='Product Details' value={newList.Detail}
                                    onChange={(e) => setNewlist({ ...newList, Detail: e.target.value })} />
                            </div>
                            <div className="input-box">
                                <label>Product Image</label>
                                <input type="file" name='Product Image' value={newList.Img} 
                                 onChange={(e) => setNewlist({ ...newList, Img: e.target.files[0] })}  />
                            </div>
                            <button onClick={Updatelist}>Submit</button>
                        </form>
                    </section>
                </Box>
            </Box>
            <Adminfoot />
        </>
    )
}
