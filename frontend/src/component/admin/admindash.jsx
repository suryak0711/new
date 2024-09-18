import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import { FaUser } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosCart } from "react-icons/io";
import Adminhead from './adminhead';
import Adminfoot from './adminfoot';
import Axios from 'axios';



const drawerWidth = 240;

function Admindash() {
  const [count, setCount] = useState(0);
  const[Orders,setOreders]=useState(0);
  const[ucount,setUcount]=useState(0);
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/count');
        setCount(response.data.count); 
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };
  
    fetchCount();
  }, []);
  
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/allorder');
        setOreders(response.data.count);  
      } catch (error) {
        console.error('Error fetching order count:', error);
      }
    };
  
    fetchOrder();
  }, []);

  useEffect(() => {
    const fetchucount = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/ucount');
        setUcount(response.data.count);  
      } catch (error) {
        console.error('Error fetching order count:', error);
      }
    };
  
    fetchucount();
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex',background:'#ccc',height:'657px' }}>
        <Adminhead/>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ maxWidth: 345,height:'245px' ,background:'rgb(226, 87, 87)',color:'white',textAlign:'center'}}>
                  <FaUser style={{fontSize:'50px',marginTop:'25px'}}/>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Total Users
                      </Typography>
                      <Typography variant="h5" component="div">{ucount}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ maxWidth: 345,height:'245px',background:'rgb(218, 92, 201)',color:'white',textAlign:'center'}}>
                <ImSpoonKnife style={{fontSize:'50px',marginTop:'25px'}}/>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       Total Product
                      </Typography>
                      <Typography variant="h5" component="div">{count}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ maxWidth: 345,height:'245px',background:'rgb(94, 219, 250)',color:'white',textAlign:'center' }}>
                <IoIosCart style={{fontSize:'50px',marginTop:'25px'}}/>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Total Booking
                      </Typography>
                      <Typography variant="h5" component="div">{Orders}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* <Grid size={{ xs: 12, md: 4 }}><br/>
                <Card sx={{ maxWidth: 345,height:'245px' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Adminfoot/>
    </>
  );
}

export default Admindash;
