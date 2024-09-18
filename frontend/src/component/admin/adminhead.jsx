import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { Divider } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
const drawerWidth = 240;

export default function Adminhead(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/admin/adminlogin'); 
      };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }, background: 'blue'
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" noWrap component="div">
              Admin Panel
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
            }}
          ><br />
            <Toolbar />
            <Divider />
            <nav className='nav'>
              <ul>
                <li>
                  <Link to="/admin/admindash" className='link'><MdDashboard /> Dashboard</Link>
                </li>
                <li><Dropdown>
                  <Dropdown.Toggle style={{background:"white",color:'black',border:'none'}} >
                    <FaUser /> User's Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/admin/userdetail">User's List</Dropdown.Item>
                    <Dropdown.Item href="/admin/usercontact">User's FeedBack</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
                <li><Dropdown>
                  <Dropdown.Toggle style={{background:"white",color:'black',border:'none'}} >
                    <ImSpoonKnife /> Product Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item><Link to="/admin/addproduct" className='link'>Add Product</Link></Dropdown.Item>
                    <Dropdown.Item href="/admin/viewproduct">View Product</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
                <li><Dropdown>
                  <Dropdown.Toggle style={{background:"white",color:'black',border:'none'}} >
                    <FaCartArrowDown /> Order Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/admin/orderdetail">All Order</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2">Confirm Order</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown></li>
                <li><button onClick={handleClick} style={{border:'none',background:'white'}}><LuLogOut/> Logout</button></li>
              </ul>
            </nav>
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            <Toolbar />
            <Divider />
            <nav className='nav'>
              <ul>
                <li>
                  <Link to="/admin/admindash" className='link'><MdDashboard /> Dashboard</Link>
                </li>
                <li><Dropdown>
                  <Dropdown.Toggle style={{background:"white",color:'black',border:'none'}}>
                    <FaUser /> User's Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/admin/userdetail">User's List</Dropdown.Item>
                    <Dropdown.Item href="/admin/usercontact">User's FeedBack</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
                <li><Dropdown>
                  <Dropdown.Toggle style={{background:"white",color:'black',border:'none'}} >
                    <ImSpoonKnife /> Product Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item><Link to="/admin/addproduct" className='link'>Add Product</Link></Dropdown.Item>
                    <Dropdown.Item href="/admin/viewproduct">View Product</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>
                <li><Dropdown>
                  <Dropdown.Toggle style={{background:"white",color:'black',border:'none'}} >
                    <FaCartArrowDown /> Order Details
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/admin/orderdetail">All Order</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2">Confirm Order</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown></li>
                <li><button onClick={handleClick} style={{border:'none',background:'white'}}><LuLogOut/> Logout</button></li>
              </ul>
            </nav>
          </Drawer>
        </Box>
      </Box>
    </>
  )
}
