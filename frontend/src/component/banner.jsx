import React from 'react';
import Grid from '@mui/material/Grid2';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import B1 from '../assets/b1.png';
import B2 from '../assets/b2.png';
import B3 from '../assets/b5.jpg';
import B4 from '../assets/b4.png';

export default function Banner() {
  return (
    <>
      <Container fluid maxWidth="xl">
        <div className='home'>
        <Box sx={{ flexGrow: 1, mt: 2, ml: 3 }} >
            <Typography variant='h4'sx={{textAlign:'left',fontWeight:600}}>Offers</Typography>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={6} sx={{mt:2}}>
              <img 
                src={B1} 
                alt="banner" 
                style={{ width: '100%', maxWidth: '705px', height: '400px', objectFit: 'cover' }} 
              />
            </Grid>
            <Grid xs={12} sm={6} md={6} sx={{mt:2}}>
              <img 
                src={B2} 
                alt="banner" 
                style={{ width: '100%', maxWidth: '705px', height: '400px', objectFit: 'cover' }} 
              />
            </Grid>
            <Grid xs={12} sm={6} md={6} sx={{mt:2}}>
              <img 
                src={B3} 
                alt="banner" 
                style={{ width: '100%', maxWidth: '705px', height: '400px', objectFit: 'cover' }} 
              />
            </Grid>
            <Grid xs={12} sm={6} md={6} sx={{mt:2}}>
              <img 
                src={B4} 
                alt="banner" 
                style={{ width: '100%', maxWidth: '705px', height: '400px', objectFit: 'cover' }} 
              />
            </Grid>
          </Grid>
        </Box>
        </div>
      </Container>
    </>
  );
}
