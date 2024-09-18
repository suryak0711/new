import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust path as necessary

function Header() {
  const { user, logout } = useAuth(); // Get user and logout function from context
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(!!user);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    if (loggedIn) {
      logout(); // Log out the user
      navigate('/'); // Redirect to login page
    } else {
      navigate('/userlogin'); // Redirect to login page
    }
    handleMenuClose();
  };

  useEffect(() => {
    setLoggedIn(!!user);
  }, [user]);

  return (
    <AppBar position="static" sx={{ background: 'black', color: '#ff7f50' }}>
      <Toolbar>
        <Typography variant='h3' sx={{ color: 'azure' }}>Ecommerce</Typography>
        {/* Mobile Menu Icon */}
        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Welcome{loggedIn ? `, ${user}` : ' Guest'}!
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/card">Product</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
              <MenuItem onClick={handleLoginClick}>
                {loggedIn ? 'Logout' : 'Login'}
              </MenuItem>
            </Menu>
          </Box>
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: 'flex', ml: 'auto' }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/card">Product</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" onClick={handleLoginClick}>
              {loggedIn ? 'Logout' : 'Login'}
            </Button>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Welcome{user ? `, ${user}` : ' Guest'}!
            </Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
