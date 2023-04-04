import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShoeItem = ({ shoe }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe.imageUrl} />
      <Card.Body>
        <Card.Title>{shoe.name}</Card.Title>
        <Card.Text>{shoe.description}</Card.Text>
        <Button variant="primary">{shoe.price}</Button>
      </Card.Body>
    </Card>
  );
};

const ShoeList = ({ shoes }) => {
  return (
    <div>
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;
