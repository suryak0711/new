import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Axios from 'axios';
import Grid from '@mui/material/Grid2';
import { CiStar } from "react-icons/ci";
import { Container, TextField } from '@mui/material';
import Footer from './userfooter';
import { Link } from "react-router-dom";
// import Header from './header';

export default function Productcard({ totalStars = 5 }) {
  const [emplist, setEmpList] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  // const [username1, setUsername] = useState('');

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

  const [selectedRating, setSelectedRating] = useState({});

  const handleRating = (productId, rating) => {
    setSelectedRating(prev => ({ ...prev, [productId]: rating }));
  };

  
  const filteredProducts = emplist.filter((val) =>
    val.P_Name.toLowerCase().includes(search.toLowerCase()) ||
    val.Brand.toLowerCase().includes(search.toLowerCase()) ||
    val.P_Type.toLowerCase().includes(search.toLowerCase()) ||
    val.P_Price.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    {/* <Header username={username1} setUsername={setUsername} /><br /> */}<br/>
      <Container fluid maxWidth="xl">
        <div className='buy'>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginBottom: 3, marginTop: 2 }}
        />

        <div>
          {error && <p>{error}</p>}
          <Grid container spacing={2}>
            {filteredProducts.map((val, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ maxWidth: 345, height: 'auto', marginTop: '10px' }} key={val.id}>
                  <CardMedia
                    component="img"
                    height={200}
                    maxWidth={10}
                    sx={{ marginTop: '10px' }}
                    // src={`http://localhost:3000/uplods/${val.Img}`} 
                    src='../mobile.jpeg'
                    alt={val.P_Name}
                  />
                  <CardContent>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '700' }}>{val.P_Name}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>{val.Brand}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>{val.P_Type}</Typography>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '700' }}>₹{val.P_Price}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{val.Detail}</Typography>

                    <div style={{ textAlign: 'center', margin: '10px 0' }}>
                      {[...Array(totalStars)].map((_, i) => (
                        <CiStar
                          key={i}
                          size={24}
                          style={{ cursor: 'pointer', color: i < (selectedRating[val.id] || 0) ? '#ffc107' : 'black' }}
                          onClick={() => handleRating(val.id, i + 1)}
                        />
                      ))}
                      {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {selectedRating[val.id] ? `Rated ${selectedRating[val.id]} stars` : ''}
                      </Typography> */}
                    </div><br/>

                    <Link to={`/buynow/${val.id}`} style={{textDecoration:'none'}} className='btn1'>Buy Now</Link >
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <br />
        </div><br />
      </Container>
      <Footer />
    </>
  );
}
