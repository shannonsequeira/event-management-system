import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const navbarBrandStyle = {
    display: "flex",
    alignItems: "center",
  };

  const brandImageStyle = {
    width: "40px", // Adjust the size as needed
    height: "40px", // Adjust the size as needed
    borderRadius: "50%", // Makes the image rounded
    marginRight: "10px", // Space between the image and the text
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" style={navbarBrandStyle}>
        <img src="/favicon.ico" alt="Logo" style={brandImageStyle} />
        Gatherly
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/create-event">
            Create Event
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
