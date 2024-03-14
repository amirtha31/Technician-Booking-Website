import React from 'react';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <a href="ListBooking">ListBooking</a>
      <a href="ListSubscribers" >ListSubscribers</a>
      <a href='/'>Logout</a>
      
    </div>
  );
}

export default Sidebar;
