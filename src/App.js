import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Shoe } from './components/Shop/shoe';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import { Contact } from './components/contact';
import { About } from './components/about';
import Login from './components/login';
import { Home } from './components/home'; 
import { Womens } from './components/womens'; 
import  Men  from './components/men';
import { Shoelist } from './components/shoelist';
import { Cart } from "./components/Cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; //routes

class App extends React.Component {
  render() { //render methd to dispay other componets 
  return (
    <ShopContextProvider>
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
                  <NavDropdown.Item href="/shoe">
                    Men & Women Shoes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
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
            <Route path='/contact' element={<Contact/>}></Route>   {/* navigate to the addplanner component*/}
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/womens' element={<Womens/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/shoe' element={<Shoe/>}></Route>
          </Routes>
  
      </header>
    </div>
    </Router>
    </ShopContextProvider>
  );
}
}

export default App;