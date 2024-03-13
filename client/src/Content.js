// Content.js
import React from 'react';
import Sidebar from './Sidebar';

function Content({ page }) {
  let content = '';

  switch(page) {
    case 'ListBooking':
      content = <div><h2>Appointment Bookings</h2><p>Welcome to see the booking details</p></div>;
      break;
    case 'ListSubscribers':
      content = <div><h2>List of Subscribers</h2><p>Welcome to see the subscribers</p></div>;
      break;
    default:
      content = <div><h2>Select the required field</h2></div>;
  }

  return (
    <>
    
    <div className="content">
      {content}
    </div>
    </>
  );
}

export default Content;
