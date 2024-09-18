import React from 'react'
import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import T1 from '../assets/t1.jpeg';
import T2 from '../assets/t2.jpeg';
import T3 from '../assets/t3.jpeg';
import T4 from '../assets/t4.jpeg';

export default function Topcatogeries() {
  return (
    <>
    <Container fluid maxWidth="xl" className='top' >
    <Card>
        <Typography variant='h4' sx={{textAlign:'left',fontWeight:600,mt:2,ml:2}}>Top Categories</Typography>
    <Grid container spacing={18} sx={{padding:'10px'}}>
    <Grid item xs={12} sm={4}>
    <img src={T1} alt='Furniture'/>
    <Typography variant='h5'>Furniture</Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
    <img src={T2} alt='Mobile'/>
    <Typography variant='h5'>Mobile</Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
    <img src={T3} alt='Shoes'/>
    <Typography variant='h5'>Shoes</Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
    <img src={T4} alt='clothes'/>
    <Typography variant='h5'>clothes</Typography>   
    </Grid>
    </Grid>
    </Card>
    </Container>
    </>
  )
}
