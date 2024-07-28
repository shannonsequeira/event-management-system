<<<<<<< HEAD
// frontend/src/pages/UserProfilePage.js
import React from 'react';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
  return (
    <div>
      <UserProfile />
=======
import React from "react";
import {
  Container,
  Button,
  Card,
  Image,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const UserProfilePage = () => {
  const pageStyle = {
    backgroundImage: "url('/earthy-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "rgba(34, 49, 63, 0.8)",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  };

  const profilePicStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "20px",
  };

  // Hardcoded user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Tech enthusiast and conference organizer.",
    contactNumber: "123-456-7890",
    eventsOrganized: [
      {
        title: "Procrastinators Anonymous Annual Meetup",
        date: "November 30, 2025",
      },
      {
        title: "Effective Time Management... Eventually",
        date: "November 30, 2025",
      },
    ],
  };

  return (
    <div style={pageStyle}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card style={cardStyle}>
              <Card.Body className="text-center">
                <Image
                  src={user.profilePicture}
                  style={profilePicStyle}
                  alt="Profile Picture"
                />
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                  <br />
                  <strong>Bio:</strong> {user.bio}
                  <br />
                  <strong>Contact Number:</strong> {user.contactNumber}
                </Card.Text>
                <Button
                  variant="primary"
                  as={Link}
                  to="/edit-profile" // Link to edit profile page
                  className="mt-3"
                >
                  Edit Profile
                </Button>
                <Button
                  variant="secondary"
                  as={Link}
                  to="/"
                  className="mt-3 ms-2"
                >
                  Back
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="mt-4" style={cardStyle}>
              <Card.Header as="h5">Events Organized</Card.Header>
              <ListGroup>
                {user.eventsOrganized.length > 0 ? (
                  user.eventsOrganized.map((event, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{event.title}</strong> - {event.date}
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>No events organized yet.</ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
>>>>>>> origin/main
    </div>
  );
};

export default UserProfilePage;
