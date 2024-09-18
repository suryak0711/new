import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Container, Typography, TextField, Button, Card, CardContent, CardMedia, Divider, Paper, Box
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useParams, useNavigate } from 'react-router-dom'; 
import Footer from './userfooter';
import { useAuth } from '../AuthContext'; // Adjust path as necessary

const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);
  const [userDetails, setUserDetails] = useState({ name: '', address: '', phone: '' });
  const [product, setProduct] = useState({ P_Name: '', P_Price: 0 });
  const { id } = useParams(); 
  const taxRate = 0.08;
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user from context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(`http://localhost:3001/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const totalPrice = Number((product.P_Price * quantity).toFixed(2));
  const totalTax = Number((totalPrice * taxRate).toFixed(2));
  const finalPrice = (totalPrice + totalTax).toFixed(2); 

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      alert('Please login first to continue');
      navigate('/userlogin'); // Redirect to login page
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3001/order', {
        product_id: id,
        quantity,
        total_price: finalPrice,
        user_name: userDetails.name,
        address: userDetails.address,
        phone: userDetails.phone
      });
      alert(`Order placed successfully! Order ID: ${response.data.orderId}`);
      navigate('/success');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  return (
    <>
    <br/>
    <Container fluid maxWidth="xl">
      <div className='buy'><br />
      <Typography variant="h4" align="center" gutterBottom>
        Buy Now
      </Typography>
      <Grid container spacing={4}>
        <Box sx={{ flexGrow: 1 }}>
          {/* Product Details */}
          <Grid xs={12} md={6}>
            <Card>
              <CardMedia
                image="https://via.placeholder.com/300"
                title="Product Image"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h5">{product.P_Name}</Typography>
                <Typography variant="h6">Price: ₹{product.P_Price}</Typography>
                <TextField
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  fullWidth
                  margin="normal"
                  inputProps={{ min: 1 }} 
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Payment Summary */}
          <Grid xs={12} md={6} sx={{ mt: 2 }}>
            <Paper>
              <Typography variant="h6">Payment Summary</Typography>
              <Divider />
              <Typography variant="body1">Price: ₹{totalPrice.toFixed(2)}</Typography> 
              <Typography variant="body1">Tax: ₹{totalTax.toFixed(2)}</Typography>
              <Typography variant="body1"><strong>Total: ₹{finalPrice}</strong></Typography>
            </Paper>
          </Grid>
        </Box>

        <Grid xs={12} className='delivery2'>
          <form onSubmit={handleSubmit}>
            <Typography variant="h6">Delivery Details</Typography>
            <TextField
              label="Name"
              value={userDetails.name}
              onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Address"
              value={userDetails.address}
              onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
              fullWidth
              margin="normal"
              required
              multiline
              rows={4}
            />
            <TextField
              label="Phone"
              value={userDetails.phone}
              onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={!user}>
              Buy Now
            </Button>
          </form>
        </Grid>
      </Grid>
      </div>
    </Container>
    <Footer/>
    </>
  );
};

export default BuyNow
