import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";

export class Womens extends React.Component {

    render() {
        return (
            <div>
               <Container>
               <h1>Womens Shoes</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0982/2240/products/w_nimbuslite_100_7_1200x1200.jpg?v=1612375034" />
                <Card.Body>
                  <Card.Title>Nimbus Lite</Card.Title>
                  <Card.Text>
                  You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colours and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favourite. Get out there and shine.
                  </Card.Text>
                  <Button variant="primary">121.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0982/2240/products/w_nimbuslite_100_7_1200x1200.jpg?v=1612375034" />
                <Card.Body>
                  <Card.Title>Nimbus Lite</Card.Title>
                  <Card.Text>
                  You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colours and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favourite. Get out there and shine.
                  </Card.Text>
                  <Button variant="primary">121.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_default/92e1c971-8212-4458-9840-4d54f3c020b2/revolution-6-next-nature-road-running-shoes-BsV5CW.png" />
                <Card.Body>
                  <Card.Title>Nature Road running shoes</Card.Title>
                  <Card.Text>
                  The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.
                  </Card.Text>
                  <Button variant="primary">40.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.elverys.ie/medias/C1-000000000001136698-592Wx592H?context=bWFzdGVyfGltYWdlc3w1ODYxNXxpbWFnZS9qcGVnfGgxYi9oZGYvMTA5OTc1MTIzMzk0ODYvQzFfMDAwMDAwMDAwMDAxMTM2Njk4XzU5Mld4NTkySHwwMzcxZGU2YzZiYzJkM2Q1OGE0ZjYyZmJlZDBhMzg5YjdmYjRkYzQxMzkxYWM2NjQxYmRiNDg4MWM1ZGRkNTk1" />
                <Card.Body>
                  <Card.Title>Gym shoes</Card.Title>
                  <Card.Text>
                  Created for the hardwood but taken to the streets, the '80s b-ball icon returns with embroidered details, contrast stitching and throwback hoops flair. Its padded, low-cut collar lets you take your game anywhere—in comfort.
                  </Card.Text>
                  <Button variant="primary">100.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/377943/02/sv01/fnd/EEA/fmt/png/PWRFrame-TR-2-Nova-Shine-Training-Shoes-Women" />
                <Card.Body>
                  <Card.Title>Puma Fyler Flex</Card.Title>
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