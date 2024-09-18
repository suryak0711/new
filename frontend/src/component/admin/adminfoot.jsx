import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";


export default function Adminfoot() {
    const lightDheme = {
        backgroundColor: "blue",
      };
      const colors = {
        color: "white",
      };
  return (
    <>
     <Container maxWidth="xl" style={lightDheme}>
      <Grid lg={12} sx={{ textAlign: "center", padding: 3 }}>
        <Typography variant="p" component="small" style={colors}>
          Copyright &copy; {new Date().getFullYear()} Ecommerce. All Rights Reserved.
        </Typography>
      </Grid>
    </Container>
    </>
  )
}
