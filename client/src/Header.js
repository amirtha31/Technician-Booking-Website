
import { MantineProvider, Text, } from '@mantine/core';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import Carousel from './Carousel';
import FlashcardPresentation from './Flashcards';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

export default function Header(){
    return(
        <>

    <nav className="navbar navbar-expand-sm bg-light small navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src="https://i.pinimg.com/736x/da/c7/58/dac758d7606690d057a9cbba5f259154.jpg"
        alt="" height={50} width={50}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/Portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Services
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/Service1">
                Service 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Service2">
              Service 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Service3">
              Service 3
              </a>
            </li>
            <li>
              <a href="Service4" className="dropdown-item">
              Service 4
              </a>
            </li>
            <li>
              <a href="Service5" className="dropdown-item">
              Service 5
              </a>
            </li>
            <li>
              <a href="Service6" className="dropdown-item">
              Service 6
              </a>
            </li>
            <li>
              <a href="Service7" className="dropdown-item">
              Service 7
              </a>
            </li>
            <li>
              <a href="Service8" className="dropdown-item">
              Service 8
              </a>
            </li>
            <li>
              <a href="Service9" className="dropdown-item">
              Service 9
              </a>
            </li>
            <li>
              <a href="Service10" className="dropdown-item">
              Service 10
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Testimonials">
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/login">
            Login          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user/create">
            Register
          </a>
        </li>
      </ul>
    </div>
  </div>
  <button
    style={{ backgroundColor: "black", color:"white"}}
    className="btn float-end btn-sm"
    
  ><a className="nav-link" href="/admin">
  Admin  </a>
  </button>
  
  <div className="d-flex" style={{ height: 2 }}>
    <div className="vr  mx-3" />
  </div>
  
</nav>
<Carousel></Carousel>
<Portfolio></Portfolio>
<div>
    <FlashcardPresentation></FlashcardPresentation>
</div>
<div>
  <Testimonials></Testimonials>
</div>
<Footer></Footer>
        </>
    )
}