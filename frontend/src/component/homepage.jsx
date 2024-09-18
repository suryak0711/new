import React from 'react';
import Footer from './userfooter'
import Banner from './banner'
import Carosual from './carosual';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topcatogeries from './topcatogeries';
export default function Homepage() {
  return (
    <><br />
    <Carosual/><br />
    <Topcatogeries/>
    <Banner/><br />
    <Footer/>
    </>
  )
}
