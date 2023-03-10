import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Contact from './components/contact'
import { About } from './components/about';
import { Home } from './components/home'; 
import { Womens } from './components/womens'; 
import  Men  from './components/men';
import  Cart  from './components/cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; //routes

class App extends React.Component {
  render() { //render methd to dispay other componets 
  return (
    <Router>
    <div className="App">
      <header >
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">SHOE4U</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown title="New Shoes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/men">Men's Shoes</NavDropdown.Item>
                  <NavDropdown.Item href="/womens">
                    Women's Shoe
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/cart">
                    CheckOut
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <input id="searchbar" onkeyup="search_shoes()" type="text"
          name="search" placeholder="Search Shoes"></input>

        </Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>  
            <Route path='/about' element={<About/>}></Route>   {/* navigate to the listplanner component*/}
            <Route path='/contact' element={<Contact />}></Route>   {/* navigate to the addplanner component*/}
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/womens' element={<Womens/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
  
      </header>
    </div>
    </Router>
  );
}
}

export default App;