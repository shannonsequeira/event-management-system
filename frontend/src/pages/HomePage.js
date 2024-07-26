import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const pageStyle = {
    backgroundImage: 'url(/green-leaf-texture-leaf-texture-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={pageStyle}>
      <Container>
        <Card className="mt-5" style={cardStyle}>
          <Card.Body>
            <Card.Title>Welcome to Event Management System</Card.Title>
            <Card.Text>
              Our system helps you manage and track all your events seamlessly. Register or login to get started.
            </Card.Text>
            <Button variant="primary" as={Link} to="/register" className="me-2">Register</Button>
            <Button variant="secondary" as={Link} to="/login">Login</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default HomePage;
