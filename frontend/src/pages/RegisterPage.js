import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/authActions';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {

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

  const formStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    try {
      await dispatch(registerUser(formData));
      e.target.reset(); // Clear the form fields
    } catch (error) {
      console.error('Error during registration:', error);
      e.target.reset();
    }
  };

  return (
    <div style={pageStyle}>
      <Container className="mt-4" style={formStyle}>
        <h1 className="mb-4">Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 me-2">Register</Button>
          <Button variant="secondary" as={Link} to="/" className="mt-3">Back</Button>
        </Form>
      </Container>
      <ToastContainer /> {/* ToastContainer to show toast notifications */}
    </div>
  );
};

export default RegisterPage;
