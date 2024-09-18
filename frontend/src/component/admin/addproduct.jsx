import React,{useState} from 'react'
import Axios from 'axios'
import Adminhead from './adminhead'
import Adminfoot from './adminfoot'
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';

const drawerWidth = 240;

export default function Addproduct() {
    const [Pname, setPName] = useState("");
    const [Brand, setBrand] = useState("");
    const [Ptype, setPtype] = useState("");
    const [PPrice, setPPrice] = useState("");
    const [Detail, setDetail] = useState("");
    const [Img, setImg] = useState(null); // Updated to handle file input

    const addproduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Pname', Pname);
        formData.append('Brand', Brand);
        formData.append('Ptype', Ptype);
        formData.append('PPrice', PPrice);
        formData.append('Detail', Detail);
        formData.append('file', Img); // Append the file to the formData

        Axios.post("http://localhost:3001/add", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            if(response.data.status){
                alert('Product added successfully');
            }else{
                alert('Data passing failed');
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while adding the product');
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
                    <section className="container">
                        <header>Add Product</header>
                        <form action="#" className="form" onSubmit={addproduct}>
                            <div className="input-box">
                                <label>Product Name</label>
                                <input type="text" placeholder="Enter Product name" required  onChange={(e)=>{setPName(e.target.value)}} />
                            </div>
                            <div className="input-box">
                                <label>Brand Name</label>
                                <input type="text" placeholder="Enter Brand Name" required  onChange={(e)=>{setBrand(e.target.value)}}/>
                            </div>
                            <div className="input-box">
                                <label>Product Type</label>
                                <input type="text" placeholder="Enter Product Type" required  onChange={(e)=>{setPtype(e.target.value)}}/>
                            </div>
                            <div className="input-box">
                                <label>Product Price</label>
                                <input type="text" placeholder="Enter Product Price" required  onChange={(e)=>{setPPrice(e.target.value)}}/>
                            </div>
                            <div className="input-box">
                                <label>Product Description</label>
                                <textarea placeholder="Enter Product Desceiption" required  onChange={(e)=>{setDetail(e.target.value)}}/>
                            </div>
                            <div className="input-box">
                                <label>Product Image</label>
                                <input type="file" required  onChange={(e)=>{setImg(e.target.files[0])}}/>
                            </div>
                            <button>Submit</button>
                        </form>
                    </section>
                </Box>
            </Box>
            <Adminfoot />
        </>
    )
}
