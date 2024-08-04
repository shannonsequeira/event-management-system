import React from "react";
import FeedbackForm from "../components/FeedbackForm"; // Make sure to import your FeedbackForm component
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutUs = () => {
  const styles = {
    container: {
      // backgroundImage: "url('/path-to-your-background-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "40px",
      color: "black",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      textAlign: "center",
    },
    description: {
      fontSize: "1.2rem",
      lineHeight: 1.6,
      marginBottom: "20px",
      textAlign: "center",
    },
    feedbackTitle: {
      fontSize: "2rem",
      marginTop: "40px",
      textAlign: "center",
    },
    feedbackDescription: {
      fontSize: "1.2rem",
      marginBottom: "20px",
      textAlign: "center",
    },
    button: {
      marginTop: "20px",
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 style={styles.title}>About Gatherly</h1>
          <p style={styles.description}>
            Welcome to Gatherly, your go-to platform for discovering events
            happening around you! We are dedicated to connecting people with
            exciting activities and gatherings in their local communities.
          </p>
          <p style={styles.description}>
            At Gatherly, we understand that life is all about experiences.
            Whether you’re looking for music festivals, art exhibitions, food
            fairs, or community gatherings, we’ve got you covered. Our platform
            allows you to easily find and explore events based on your
            interests, preferences, and location.
          </p>
          <p style={styles.description}>
            Our mission is to make event discovery seamless and enjoyable. We
            believe that every event is an opportunity to connect with others,
            create lasting memories, and celebrate life’s special moments. With
            Gatherly, you can effortlessly stay updated on upcoming events,
            RSVP, and even share your experiences with friends and family.
          </p>
          <p style={styles.description}>
            Join us in creating vibrant communities by exploring and
            participating in local events. Let’s gather together and make
            unforgettable memories!
          </p>
          <h2 style={styles.feedbackTitle}>Feedback</h2>
          <p style={styles.feedbackDescription}>
            Your feedback is important to us! Please let us know how we can
            improve your experience.
          </p>
          <FeedbackForm />
          <Button
            variant="primary"
            style={styles.button}
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to Top
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
