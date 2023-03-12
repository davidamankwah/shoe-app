import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15.00, quantity: 2 },
    { id: 3, name: 'Product 3', price: 20.00, quantity: 1 }
  ]);

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <h1>CheckOut</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Total: ${total.toFixed(2)}</p>
      <Button variant="primary">Checkout</Button>
      <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
    </Container>
  );
}

export default Cart;
