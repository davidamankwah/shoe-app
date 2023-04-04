import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
//export class Men extends React.Component {
  export default function Men() {
  const Men = [
    {name: "Brooks", price: 150.5,image_url: "https://www.elverys.ie/medias/C2-000000000001135943-592Wx592H?context=bWFzdGVyfGltYWdlc3wxMjg3NjF8aW1hZ2UvanBlZ3xoMzAvaGZkLzEwOTMwMDI1MDcwNjIyL0MyXzAwMDAwMDAwMDAwMTEzNTk0M181OTJXeDU5Mkh8ZjVkNGFjZmQxMDEzYzBkOTA5MjUzYmRjYzdhOGFlYmNlNTM1NDQ1NjY3MGZkNmUwZDU4NjFkNDI3OTcwZmIwYg", about: "Brooks Ghost 10 Mens Running Shoe"},


    {
      name: "Nike",
      price: 100.5,
      image_url:
        "https://www.elverys.ie/medias/C2-000000000001136650-592Wx592H?context=bWFzdGVyfGltYWdlc3w5NDk4MnxpbWFnZS9qcGVnfGhlOS9oMjQvMTA5ODczNzE2MjY1MjYvQzJfMDAwMDAwMDAwMDAxMTM2NjUwXzU5Mld4NTkySHxkOGZlMWQwMWZlM2M3OTRjY2MyNGY3MTk4NDk3YjY3ZmM5Y2ZjMzk4ZThmZmUyYjAwNGQ5ZjRiNjdiNzAzZDI4",
      about: "Nike Air Zoom Pegasus 39 Mens Running Shoes"
    },

    {
      name: "Reebook",
      price: 70.5,
      image_url:
        "https://www.elverys.ie/medias/C1-000000000001135211-636Wx636H?context=bWFzdGVyfGltYWdlc3wxNDc5ODd8aW1hZ2UvanBlZ3xoYzUvaGM1LzExMDU5NjkyMDc3MDg2L0MxXzAwMDAwMDAwMDAwMTEzNTIxMV82MzZXeDYzNkh8YmU3ZWU0ODZjYjVmMjI5NGUzNTBiYTQ4YzVjNDQwNWE2MTkyYmJjMzIyZGRlYjRkMWFkOGRmYjVkZDhhZWUzMQ",
      about: "Reebok NFX Mens Trainers"
    },

    {
      name: "ENERGETICS",
      price: 184.5,
      image_url:
        "https://www.elverys.ie/medias/C2-000000000001137706-592Wx592H?context=bWFzdGVyfGltYWdlc3wzOTU2N3xpbWFnZS9qcGVnfGg5YS9oMDkvMTA5Njc4MzUyMTM4NTQvQzJfMDAwMDAwMDAwMDAxMTM3NzA2XzU5Mld4NTkySHxlZWFjNGZhMzMwYzExM2M3MzZkMDAxZGQ4YjM0MTcxNTRmMzMwYWEzNDQzZmMzOTQzYWJkYjk3ZGY1NjVmNDIx",
      about: "Energetics Zyrox Trail II AQB Mens Trail Running Shoes"
    },
    
    
    {
      name: "ASICS",
      price: 250.5,
      image_url:
      "https://www.elverys.ie/medias/C2-000000000001134960-592Wx592H?context=bWFzdGVyfGltYWdlc3w2MDMwNHxpbWFnZS9qcGVnfGhlOC9oZjEvMTA5NTM1OTY4NjI0OTQvQzJfMDAwMDAwMDAwMDAxMTM0OTYwXzU5Mld4NTkySHw3YzZlNDFlNGRmMmE3M2RjNjEwY2Q5MjkxNTFlYWE2ZjhiZTk2N2FmMjdmMTViNWYxZjBiZmE0MTI3OWZlZjM1",
      about: "Asics Gel-Nimbus 25 Mens Running Shoes"
    }
  ];
  return (
    <div >
      {Men.map((data) => (
         <Container style={{ width: '18rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}> 
            <Row>
               <Col>
            <Card style={{ width: '18rem'}}>
               <Card.Img variant="top" src={data.image_url} />
               <Card.Body>
               <Card.Title  >{data.name}</Card.Title>
               <Card.Text>
              {data.about}
              </Card.Text>
              <Card.Text>
              €{data.price}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
              </Card.Body>
         </Card>
     </Col>
       </Row>
        </Container>
      ))}
    </div>   
    

    
  );
  }