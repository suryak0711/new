import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom'; 

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 3 }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'green' }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Order Placed Successfully!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Your order has been booked successfully. You will receive an email confirmation shortly.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ mt: 2 }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default PaymentSuccess;
