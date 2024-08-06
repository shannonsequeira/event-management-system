import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/authActions";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const pageStyle = {
    backgroundImage: "url(/green-leaf-texture-leaf-texture-background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "0px",
    borderRadius: "10px",
    position: "relative", // To position the eye icon inside the form
  };

  const formColStyle = {
    padding: "20px 80px 40px 40px",
  };

  const inputStyle = {
    backgroundColor: "rgba(74, 76, 68, 0.8)", // Slightly transparent color
    color: "white",
    border: "none",
    borderRadius: "5px",
    paddingRight: "40px", // Add padding to make room for the eye icon
  };

  const eyeIconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "50%",
    padding: "5px",
    cursor: "pointer",
  };

  const ImageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    display: "flex",
    height: "100%",
  };

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
      console.error("Error during registration:", error);
      e.target.reset();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div style={pageStyle}>
      <Container className="mt-4" style={{ ...formStyle, marginTop: "0px" }}>
        <style>
          {`
            .password-input::placeholder,
            .confirm-password-input::placeholder,
            .email-input::placeholder,
            .name-input::placeholder {
              color: #606561;
            }
          `}
        </style>
        <div className="row">
          <div className="col-lg-7">
            <img
              src="/view-office-desk-with-messy-workspace-laptop.jpg"
              alt="Decorative background"
              className="img-fluid"
              style={ImageStyle}
            />
          </div>
          <div className="col-lg-5">
            <Form
              onSubmit={handleSubmit}
              style={{ ...formColStyle, textAlign: "center" }}
            >
              <h1 className="mb-3">Register</h1>
              <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label style={{ textAlign: "left", display: "block" }}>
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  required
                  style={inputStyle}
                  className="name-input"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label style={{ textAlign: "left", display: "block" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  style={inputStyle}
                  className="email-input"
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                className="mb-3"
                style={{ position: "relative" }}
              >
                <Form.Label style={{ textAlign: "left", display: "block" }}>
                  Password
                </Form.Label>
                <Form.Control
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  style={inputStyle}
                  className="password-input"
                />
                <div
                  onClick={togglePasswordVisibility}
                  style={eyeIconStyle}
                  className="mt-3"
                >
                  {passwordVisible ? (
                    <FaEye size={20} color="#606561" />
                  ) : (
                    <FaEyeSlash size={20} color="#606561" />
                  )}
                </div>
              </Form.Group>
              <Form.Group
                controlId="formBasicConfirmPassword"
                className="mb-3"
                style={{ position: "relative" }}
              >
                <Form.Label style={{ textAlign: "left", display: "block" }}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  style={inputStyle}
                  className="confirm-password-input"
                />
                <div
                  onClick={toggleConfirmPasswordVisibility}
                  style={eyeIconStyle}
                  className="mt-3"
                >
                  {confirmPasswordVisible ? (
                    <FaEye size={20} color="#606561" />
                  ) : (
                    <FaEyeSlash size={20} color="#606561" />
                  )}
                </div>
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button variant="success" type="submit" className="mt-3 me-2">
                  Register
                </Button>
                <Button variant="secondary" as={Link} to="/" className="mt-3">
                  Back
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
      <ToastContainer /> {/* ToastContainer to show toast notifications */}
    </div>
  );
};

export default RegisterPage;
