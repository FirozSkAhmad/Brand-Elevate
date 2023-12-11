import React from 'react';
import Accordion from './Accordion';
import "./service.css";

const Services = () => {
  return (
    <div className='service__Wrap'>
      <div className='service__Ttl'>
        <div className='icon_Ttl'><img src='assets/images/icon-ttl.png'></img></div>
        <div className='text_Ttl'><h3>Our Services</h3></div>
      </div>
      <Accordion></Accordion>
    </div>
  )
}

export default Services