import React, {useRef, useEffect } from 'react';
import { CardHeader, Container } from 'react-bootstrap';
import Grid from '@mui/material/Grid2';
import Video from '../assets/v1.mp4';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import A6 from '../assets/a7.jpg';
import A5 from '../assets/a5.png';
import Footer from './userfooter';
import CardMedia from '@mui/material/CardMedia';
// import Header from './header';

export default function About() {
  const videoRef = useRef(null);
  // const [username1, setUsername] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
    {/* <Header username={username1} setUsername={setUsername} /><br /> */}<br/>
      <Container fluid maxWidth="xl">
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid xs={12}>
              
              <Card >
      <CardContent>
      <video
                ref={videoRef}
                src={Video}
                controls
                loop
                muted
                style={{ width: '100%' }}
              />
      </CardContent>
    </Card>
            </Grid>
            <Grid xs={12}>
            <Card sx={{width:'auto',border:'none'}}><br />
      <CardHeader><Typography variant='h4' sx={{textAlign:'center'}}>TECHNOLOGY AT FLIPKART<br/><b>INNOVATION</b></Typography></CardHeader>    
      <CardMedia
        component="img"
        height="500"
        width="1500"
        src={A5}
        alt="Paella dish"
      />
      <CardContent>
      {/* <img src={A5} alt="a5" height={500} width={1500}/> */}
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
        Building trust with Integrity. At Flipkart, every decision made is based on ethical and
        moral principles - no success is meaningful if it’s not achieved the right way.
        </Typography>
        <Typography variant='h5' component='button' style={{marginTop:'50px', border:' 3px solid white',
    backgroundColor:'rgb(65, 127, 235)',padding:'20px',color:'white',width:'300px',borderRadius:'10px'}}>Know More</Typography>
      </CardContent>
    </Card>
            </Grid>
            <Grid xs={12}>
            <Card sx={{width:'auto'}}><br />
      <CardHeader><Typography variant='h3' sx={{textAlign:'center'}}>Sustainability</Typography></CardHeader>  
      <CardMedia
        component="img"
        height="500"
        width="1500"
        src={A6}
        alt="Paella dish"
      />  
      <CardContent>
      {/* <img src={A6} alt='a6' height={500} width={1500} /> */}
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
        Building trust with Integrity. At Flipkart, every decision made is based on ethical and
        moral principles - no success is meaningful if it’s not achieved the right way.
        </Typography>
        <Typography variant='h5' component='button' style={{marginTop:'50px', border:' 3px solid white',
    backgroundColor:'rgb(65, 127, 235)',padding:'20px',color:'white',width:'300px',borderRadius:'10px'}}>Know More</Typography>
      </CardContent>
    </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer/>
    </>
  );
}
