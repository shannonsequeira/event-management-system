import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutUser } from "../actions/authActions";
import {
  Container,
  Button,
  Card,
  Image,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={pageStyle}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card style={cardStyle}>
              <Card.Body className="text-center">
                <Image
                  src={user.profilePicture || "/default-profile.jpg"}
                  style={profilePicStyle}
                  alt="Profile Picture"
                  roundedCircle
                />
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                  <br />
                  <strong>Bio:</strong> {user.bio || "N/A"}
                  <br />
                  <strong>Contact Number:</strong> {user.contactNumber || "N/A"}
                </Card.Text>
                <Button
                  variant="primary"
                  as={Link}
                  to="/edit-profile"
                  className="mt-3"
                >
                  Edit Profile
                </Button>
                <Button
                  variant="secondary"
                  as={Link}
                  to="/events"
                  className="mt-3 ms-2"
                >
                  Back
                </Button>
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="mt-3 ms-2"
                >
                  Logout
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="mt-4" style={cardStyle}>
              <Card.Header as="h5">Events Organized</Card.Header>
              <ListGroup>
                {user.eventsOrganized && user.eventsOrganized.length > 0 ? (
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
    </div>
  );
};

export default UserProfilePage;
