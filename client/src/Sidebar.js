// Sidebar.js
import React, { useState } from 'react';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <a href="ListBooking">ListBooking</a>
      <a href="ListSubscribers" >ListSubscribers</a>
      {/* <a href="#" onClick={() => setPage('services')}>Services</a>
      <a href="#" onClick={() => setPage('contact')}>Contact</a> */}
    </div>
  );
}

export default Sidebar;
