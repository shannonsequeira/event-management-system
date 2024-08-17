import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, fetchUser } from "../actions/authActions";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Updated import

const EditProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profile_picture: "",
    bio: "",
    contact_number: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        profile_picture: user.profile_picture || "",
        bio: user.bio || "",
        contact_number: user.contact_number || "",
      });
    } else {
      dispatch(fetchUser()); // Ensure user data is fetched
    }
  }, [user, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUser(formData));
      navigate("/profile"); // Navigate to profile page upon successful update
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card style={{ padding: "20px", borderRadius: "15px" }}>
            <Card.Body>
              <Card.Title>Edit Profile</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Profile Picture URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="profile_picture"
                    value={formData.profile_picture}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
                <Button
                  variant="secondary"
                  as={Link}
                  to="/profile"
                  className="ms-2"
                >
                  Back
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfilePage;
