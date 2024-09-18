import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from '@mui/material';
import S1 from '../assets/s1.webp';
import S2 from '../assets/s3.jpg';
import S3 from '../assets/s3.webp';

export default function Carosual() {
  return (
   <>
   <Container fluid maxWidth='xl'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'244px'}}
          src={S2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={S3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
   </>
  )
}
