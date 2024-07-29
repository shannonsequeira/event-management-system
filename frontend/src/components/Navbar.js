import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">
      Event Management System
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
        <Nav.Link as={Link} to="/Profile">
          profile
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;
