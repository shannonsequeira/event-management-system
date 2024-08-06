import React from "react";
import FeedbackForm from "../components/FeedbackForm"; // Ensure this path is correct
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa"; // Use Font Awesome icons

const AboutUs = () => {
  const styles = {
    container: {
      backgroundImage: 'url(/plant-against-blue-wall-background-with-copy-space.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Makes the background image fixed
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Ensures the page takes up at least the full viewport height
      padding: "40px",
      color: "black",
    },
    section: {
      marginBottom: "80px",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      textAlign: "center",
    },
    sectionDescription: {
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
    teamMember: {
      textAlign: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    teamImage: {
      borderRadius: "50%",
      width: "150px",
      height: "150px",
      objectFit: "cover",
    },
    teamSocial: {
      color: "#8d97ad",
      paddingRight: "15px",
      transition: "0.1s ease-in",
    },
    teamSocialHover: {
      color: "#316ce8",
      transform: "translate3d(0px, -5px, 0px)",
    },
    button: {
      marginTop: "20px",
    },
  };

  return (
    <Container fluid style={styles.container}>
      {/* About Gatherly Section */}
      <section style={styles.section}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 style={styles.sectionTitle}>About Gatherly</h1>
            <p style={styles.sectionDescription}>
              Welcome to Gatherly, your go-to platform for discovering events
              happening around you! We are dedicated to connecting people with
              exciting activities and gatherings in their local communities.
            </p>
            <p style={styles.sectionDescription}>
              At Gatherly, we understand that life is all about experiences.
              Whether you’re looking for music festivals, art exhibitions, food
              fairs, or community gatherings, we’ve got you covered. Our
              platform allows you to easily find and explore events based on
              your interests, preferences, and location.
            </p>
            <p style={styles.sectionDescription}>
              Our mission is to make event discovery seamless and enjoyable. We
              believe that every event is an opportunity to connect with others,
              create lasting memories, and celebrate life’s special moments.
              With Gatherly, you can effortlessly stay updated on upcoming
              events, RSVP, and even share your experiences with friends and
              family.
            </p>
            <p style={styles.sectionDescription}>
              Join us in creating vibrant communities by exploring and
              participating in local events. Let’s gather together and make
              unforgettable memories!
            </p>
          </Col>
        </Row>
      </section>

      {/* Our Team Section */}
      <section style={styles.section}>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 style={{ ...styles.sectionTitle, padding: "30px" }}>
              Our Team
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {[
            {
              name: "Michael Doe",
              title: "Property Specialist",
              img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg",
            },
            {
              name: "Jane Smith",
              title: "Event Coordinator",
              img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg",
            },
            {
              name: "John Brown",
              title: "Marketing Manager",
              img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg",
            },
            {
              name: "Emily Davis",
              title: "Customer Support",
              img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
            },
          ].map((member, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div style={styles.teamMember}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={styles.teamImage}
                />
                <h5 className="mt-4 font-weight-medium mb-0">{member.name}</h5>
                <h6 className="subtitle mb-3">{member.title}</h6>
                <p>
                  You can rely on our amazing features list and also our
                  customer services will be a great experience.
                </p>
                <div>
                  <a
                    href="mailto:example@gmail.com"
                    style={styles.teamSocial}
                    aria-label="Email"
                  >
                    <FaEnvelope size={20} />
                  </a>
                  <a
                    href="https://github.com/example"
                    style={styles.teamSocial}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/example"
                    style={styles.teamSocial}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Feedback Form Section */}
      <section style={styles.section}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 style={{ ...styles.feedbackTitle, padding: "30px" }}>We Value Your Thoughts</h2> 
            <p style={{ ...styles.feedbackDescription, padding: "10px" }}>
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
      </section>
    </Container>
  );
};

export default AboutUs;
