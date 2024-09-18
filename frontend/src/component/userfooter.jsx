import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton,Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <footer className="footer">
      <div className="footer-container">
    <div className="footer-row">
    <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Privacy Policy</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Order Status</li>
              <li>Payment Options</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Online Shop</h4>
            <ul>
              <li>Watch</li>
              <li>Bag</li>
              <li>Shoes</li>
              <li>Dress</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
            <IconButton href="#" aria-label="facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" aria-label="twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" aria-label="instagram" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" aria-label="youtube" color="inherit">
              <YouTubeIcon />
            </IconButton>
            </div>
          </div>
          <Typography variant="body2" sx={{ mt: 4,marginLeft:'400px' }}>
          Copyright &copy; {new Date().getFullYear()} Ecommerce. All Rights Reserved.
      </Typography>
          </div>
      </div> 
    </footer>
    </>
  )
}
