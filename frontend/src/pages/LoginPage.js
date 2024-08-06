import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
    position: 'relative', // To position the eye icon inside the form
  };

  const inputStyle = {
    backgroundColor: 'rgba(74, 76, 68, 0.8)', // Slightly transparent color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    paddingRight: '40px', // Add padding to make room for the eye icon
  };

  const eyeIconStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <Container className="mt-5" style={formStyle}>
        <h1 className="mb-4">Login</h1>
        <style>
          {`
            .password-input::placeholder,
            .email-input::placeholder {
              color: #606561;
            }
          `}
        </style>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
              style={inputStyle}
              className="email-input"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-3" style={{ position: 'relative' }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
              style={inputStyle}
              className="password-input"
            />
            <div onClick={togglePasswordVisibility} style={eyeIconStyle} className="mt-3">
              {passwordVisible ? <FaEye size={20} color="#606561" /> : <FaEyeSlash size={20} color="#606561" />}
            </div>
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
