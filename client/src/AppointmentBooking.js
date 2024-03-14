import React, { useState } from 'react';
import Datetime from 'react-datetime';
import { Box, Divider, Text,} from '@mantine/core';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import './App.css';

function AppointmentBooking() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleBooking = () => {
    if (!name || !mobileNumber || !email || !selectedDate || !selectedTime) {
      alert('Please fill all fields and select date and time for the appointment');
      return;
    }else{
      axios.post("http://localhost:3001/add-appointment",{
        name,
        mobileNumber,
        email,
        selectedDate,
        selectedTime
      }).then((response)=>{
        console.log(response)
      });
      
    }

  
    console.log('Appointment booked:', {
      name,
      mobileNumber,
      email,
      selectedDate,
      selectedTime
    });
  };

  

  return (
    <>
     <Box maxWidth={340} mx="auto">
     <form className="formdata">
     <Text variant="gradient" gradient={{ from: 'teal', to: 'red', deg: 2 }} ta="center" fz="xl" fw={900}>
          Appointment Booking
        </Text>
        
        <Divider my="md" />
      <br></br>
      <div className="appointment-form">
        <label className="label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input"
        />
        <label className="label">Mobile Number:</label>
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your mobile number"
          className="input"
        />
        <label className="label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input"
        />
        <label className="label">Select Date:</label>
        <Datetime
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inputProps={{ placeholder: 'Select date and time', disabled: selectedTime !== null }}
          className="input"
        />
        <label className="label">Select Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          
          className="input"
        />
        <button type='button' onClick={handleBooking} className="button">Book Appointment</button>
      </div>
      
      </form>
      </Box>
    </>
  );
}

export default AppointmentBooking;
