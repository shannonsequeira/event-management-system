import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
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
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      await dispatch(loginUser(user));
      navigate('/dashboard', { state: { message: 'Login successful!' } });
    } catch (error) {
      console.error('Error during login:', error);
      e.target.reset();
    }
  };

  return (
    <div style={pageStyle}>
      <Container className="mt-5" style={formStyle}>
        <h1 className="mb-4">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 me-2">Login</Button>
          <Button variant="secondary" as={Link} to="/" className="mt-3">Back</Button>
        </Form>
      </Container>
      <ToastContainer /> {/* ToastContainer to show toast notifications */}
    </div>
  );
};

export default LoginPage;
