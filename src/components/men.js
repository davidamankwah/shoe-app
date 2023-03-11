import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
export class Men extends React.Component {

    render() {
        return (
            <div>
                     <Container>
               <h1>Mens Shoes</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e4edf23-0fe1-4935-aac9-7f68f81b0cdf/react-infinity-3-road-running-shoes-TXLsbD.png" />
                <Card.Body>
                  <Card.Title>Running Shoes</Card.Title>
                  <Card.Text>
                  You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colours and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favourite. Get out there and shine.
                  </Card.Text>
                  <Button variant="primary">121.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cde9362a09ba4dd38c9ead6600ac074e_9366/Duramo_10_Shoes_Black_GW8336_01_standard.jpg" />
                <Card.Body>
                  <Card.Title>Duramo 10</Card.Title>
                  <Card.Text>
                  The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.
                  </Card.Text>
                  <Button variant="primary">40.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6f2061d6-a186-4402-aed4-458365f0ccbc/revolution-5-mens-road-running-shoes-ZXqS6C.png" />
                <Card.Body>
                  <Card.Title>Road Running</Card.Title>
                  <Card.Text>
                  Created for the hardwood but taken to the streets, the '80s b-ball icon returns with embroidered details, contrast stitching and throwback hoops flair. Its padded, low-cut collar lets you take your game anywhere—in comfort.
                  </Card.Text>
                  <Button variant="primary">100.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b03907b4-a52f-46a8-b195-2e79ded93212/invincible-3-mens-road-running-shoes-CLdFjq.png" />
                <Card.Body>
                  <Card.Title>Zoomx</Card.Title>
                  <Card.Text>
                  How do we describe the Nike Air More Uptempo '96? Bold, eye-catching and all about the AIR. With a design inspired by high-flying basketball style and '90s graffiti art, these kicks can't help but turn heads. Vibrant red and white accents refresh an original that has reigned supreme for more than 20 years while Air units provide comfortable cushioning.
                  </Card.Text>
                  <Button variant="primary">299.50€</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
               </Container>

                <footer class="py-5 my-5 bg-dark">
        <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
        </footer>
            </div>
        );
    }
}