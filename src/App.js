import React from 'react';
import './App.css';
import { Shoe } from './components/Shop/shoe';
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import { AddContact } from './components/Contacts/addcontact';
import { ViewAbout } from './components/Abouts/viewabout';
import Login from './components/login';
import { Home } from './components/home'; 
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import { Checkout } from './components/checkout';
import { ListContact } from './components/Contacts/listcontact';
import { EditContact } from './components//Contacts/editContact';
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
                <Nav.Link href="/viewabout">About</Nav.Link>
                <Nav.Link href="/addcontact">Contact</Nav.Link>
                <Nav.Link>
                <Link to="/cart">
                <ShoppingCart size={32} />
                </Link>
                </Nav.Link>
                <NavDropdown title="Shop Now" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/listcontact"> Your Feedback</NavDropdown.Item>
                  <NavDropdown.Item href="/shoe">
                    Men & Women Shoes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          

        </Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>  
            <Route path='/viewabout' element={<ViewAbout/>}></Route>   {/* navigate to the listplanner component*/}
            <Route path='/addcontact' element={<AddContact/>}></Route>   {/* navigate to the addplanner component*/}
            <Route path='/editContact/:id' element={<EditContact/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/shoe' element={<Shoe/>}></Route>
            <Route path='/listcontact' element={<ListContact/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
  
      </header>
    </div>
    </Router>
    </ShopContextProvider>
  );
}
}

export default App;