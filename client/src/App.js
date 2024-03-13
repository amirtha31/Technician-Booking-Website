import './App.css';
import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Flashcards from './Flashcards';
import Footer from './Footer';
import CreateUser from './CreateUser';
import Login from './Login';
import Admin from './Admin';
import SubscribeSection from './SubscribeSection';
import { MantineProvider } from '@mantine/core';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AppointmentBooking from './AppointmentBooking';
import ListBooking from './ListBooking';
import ListSubscribers from './ListSubscribers';
import Sidebar from './Sidebar';
import Content from './Content';
import Testimonials from './Testimonials';
import Contact from './Contact';
import AdminDashboard from './AdminDashboard';
import Portfolio from './Portfolio';
import Service1 from './Services/service1';
import Service2 from './Services/service2';
import Service3 from './Services/service3';
import Service4 from './Services/service4';
import Service5 from './Services/service5';
import Service6 from './Services/service6';
import Service7 from './Services/service7';
import Service8 from './Services/service8';
import Service9 from './Services/service9';
import Service10 from './Services/service10';


function App() {
  
  return (
    <div className="App">
     
      <MantineProvider>
      <BrowserRouter>
         {/* <nav>
          <ul>
          <li>
              <Link to="/">Front Page</Link>
            </li>
            <li>
              <Link to="carousel">Carousel</Link>
            </li>
            <li>
              <Link to="flashcards">Flashcards</Link>
            </li>
            <li>
              <Link to="appointmentBooking">Book Appointment</Link>
            </li>
            <li>
              <Link to="user/create">Create user</Link>
            </li>
            <li>
              <Link to="user/login">User login</Link>
            </li>
            <li>
              <Link to="Footer">Footer</Link>
            </li>
            <li>
              <Link to="Admin">Admin Login</Link>
            </li>
            <li>
              <Link to="ListBooking">List Booking</Link>
            </li>
            <li>
              <Link to="SubscribeSection">Subscribe Section</Link>
            </li>
            <li>
              <Link to="ListSubscribers">List subscribers</Link>
            </li>
            <li>
              <Link to="Sidebar">Sidebar</Link>
            </li>
            <li>
              <Link to="Content">Content</Link>
            </li>
            <li>
              <Link to="admindashboard">AdminDashboard</Link>
            </li>
            <li>
              <Link to="Testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li>
              <Link to="Service1">Service 1</Link>
            </li>
             
              
          </ul>
        </nav>   */}
        <Routes>
           <Route index element={<Header></Header>}></Route>
         <Route path="carousel" element={<Carousel></Carousel>}></Route>
          <Route path="flashcards" element={<Flashcards></Flashcards>}></Route>
          <Route path="appointmentBooking" element={<AppointmentBooking></AppointmentBooking>}></Route>
          <Route path="user/create" element={<CreateUser/>}></Route>
          <Route path="user/login" element={<Login/>}></Route>
          <Route path="footer" element={<Footer></Footer>}></Route>
          <Route path="admin" element={<Admin></Admin>}></Route>
          <Route path="ListBooking" element={<ListBooking></ListBooking>}></Route>
          <Route path="SubscribeSection" element={<SubscribeSection></SubscribeSection>}></Route>
          <Route path="ListSubscribers" element={<ListSubscribers></ListSubscribers>}></Route>
          <Route path="Sidebar" element={<Sidebar></Sidebar>}></Route>
          <Route path="Content" element={<Content></Content>}></Route>
          <Route path="Testimonials" element={<Testimonials></Testimonials>}></Route>
          <Route path="Contact" element={<Contact></Contact>}></Route>
          <Route path="admindashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="Service1" element={<Service1></Service1>}></Route>
          <Route path="Service2" element={<Service2></Service2>}></Route>
          <Route path="Service3" element={<Service3></Service3>}></Route>
          <Route path="Service4" element={<Service4></Service4>}></Route>
          <Route path="Service5" element={<Service5></Service5>}></Route>
          <Route path="Service6" element={<Service6></Service6>}></Route>
          <Route path="Service7" element={<Service7></Service7>}></Route>
          <Route path="Service8" element={<Service8></Service8>}></Route>
          <Route path="Service9" element={<Service9></Service9>}></Route>
          <Route path="Service10" element={<Service10></Service10>}></Route>
       
        </Routes>
      </BrowserRouter>
      </MantineProvider>
      
    </div>
  );
}

export default App;
