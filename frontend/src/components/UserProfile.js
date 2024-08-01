import React from "react";
import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";

const UserProfile = () => {
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  if (!userInfo) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{userInfo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {userInfo.email}
          </Card.Subtitle>
          <Card.Text>
            Joined: {new Date(userInfo.createdAt).toLocaleDateString()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
