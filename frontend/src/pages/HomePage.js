import React from "react";
import { Container, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Calendar,
  ShieldCheck,
  Ticket,
  Bell,
  PersonCircle,
} from "react-bootstrap-icons"; // Import relevant icons
import Testimonials from "../components/Testimonials";
const HomePage = () => {
  const pageStyle = {
    backgroundImage: "url(/green-leaf-texture-leaf-texture-background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Makes the background image fixed
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensures the page takes up at least the full viewport height
  };

  const sectionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Same as card background
    padding: "20px",
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Shadow for a card effect
    marginBottom: "40px", // Space between sections
    color: "white", // Ensuring text color is white
  };

  const heroImageStyle = {
    width: "100%",
    height: "auto",
  };

  const servicesSectionStyle = {
    padding: "40px 20px",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Slightly different background color for contrast
    borderRadius: "10px",
    color: "white", // Ensuring text color is white
    marginBottom: "40px", // Space between sections
  };

  const serviceCardStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Same as card background
    color: "white", // Ensuring text color is white
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    marginBottom: "20px",
  };

  const textMutedStyle = {
    color: "white", // Override muted text color to white
  };

  const additionalSectionStyle = {
    padding: "40px 20px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    color: "white",
    marginBottom: "40px",
  };

  return (
    <div style={pageStyle}>
      <Container>
        {/* Updated Section with Transparent Rounded Card Style */}
        <section style={{ padding: "20px" }}>
          <Card style={sectionStyle}>
            <Card.Body>
              <div className="row">
                <div className="col-lg-6">
                  <h1>Gatherly</h1>
                  <p className="lead">
                    Simplify Your Events, Amplify Your Experience
                  </p>
                  <p className="lead">
                    Your go-to platform for discovering events happening around
                    you! We are dedicated to connecting people with exciting
                    activities and gatherings in their local communities.
                  </p>
                  <p className="lead">
                    Our system helps you manage and track all your events
                    seamlessly. Register or login to get started.
                  </p>
                  <p>
                    <Button
                      variant="primary"
                      as={Link}
                      to="/register"
                      className="me-2"
                    >
                      Register
                    </Button>
                    <Button variant="secondary" as={Link} to="/login">
                      Login
                    </Button>
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    src="/view-palm-tree-species-with-green-foliage.jpg"
                    alt="Decorative background"
                    className="img-fluid"
                    style={heroImageStyle}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </section>

        {/* Carousel Section */}
        <section style={{ padding: "20px" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/warm-welcoming-atmosphere-as-guests-arrive-party-venue_1268-30713.jpg"
                alt="Event 1"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Warm Welcoming Reception</h3>
                <p>
                  Experience the perfect start to your event with our warm and
                  inviting atmosphere. Guests are greeted with a friendly
                  environment, setting the stage for a memorable occasion.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/people-taking-part-high-protocol-event (1).jpg"
                alt="Event 2"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Executive Summit</h3>
                <p>
                  Join us for a high-protocol event where elegance and
                  professionalism take center stage. Perfectly orchestrated to
                  meet the highest standards of event excellence.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/energetic-dance-floor-with-people-celebrating-birthday.jpg"
                alt="Event 3"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Saturday Night Special</h3>
                <p>
                  Dive into the heart of the celebration with our vibrant dance
                  floor. Enjoy a lively and energetic environment that keeps the
                  party going all night long.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Services Section */}
        <section style={servicesSectionStyle}>
          <Container>
            <h2 style={{ color: "white" }}>What We Do?</h2>
            <p style={{ color: "white" }} className="mb-5">
              Our platform offers a range of features to make event management
              easy and efficient for both organizers and participants.
            </p>
            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-3">
                <div style={serviceCardStyle}>
                  <Calendar className="text-primary" size={40} />
                  <h6 style={{ color: "white" }}>Event Management</h6>
                  <p style={textMutedStyle}>
                    Easily create, manage, and track events. From local meetups
                    to large conferences, our platform handles it all.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-3">
                <div style={serviceCardStyle}>
                  <ShieldCheck className="text-primary" size={40} />
                  <h6 style={{ color: "white" }}>Secure Registration</h6>
                  <p style={textMutedStyle}>
                    Our secure registration system ensures that your data is
                    protected and only accessible to authorized users.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-3">
                <div style={serviceCardStyle}>
                  <Ticket className="text-primary" size={40} />
                  <h6 style={{ color: "white" }}>Ticketing System</h6>
                  <p style={textMutedStyle}>
                    Manage event tickets with ease. From ticket sales to
                    check-ins, our platform makes it simple and efficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-3">
                <div style={serviceCardStyle}>
                  <Bell className="text-primary" size={40} />
                  <h6 style={{ color: "white" }}>Event Reminders</h6>
                  <p style={textMutedStyle}>
                    Receive timely notifications and reminders for upcoming
                    events so you never miss out.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-3">
                <div style={serviceCardStyle}>
                  <PersonCircle className="text-primary" size={40} />
                  <h6 style={{ color: "white" }}>User Profiles</h6>
                  <p style={textMutedStyle}>
                    Create and manage your personal profile to easily track and
                    participate in events.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-3">
                <div style={serviceCardStyle}>
                  <Calendar className="text-primary" size={40} />
                  <h6 style={{ color: "white" }}>Comprehensive Dashboard</h6>
                  <p style={textMutedStyle}>
                    Organizers can access a detailed dashboard to manage events,
                    view analytics, and more.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Additional Section */}
        <section style={additionalSectionStyle}>
          <Container>
            <h2>Why Choose Us?</h2>
            <p className="mb-4">
              Discover why Gatherly is the best choice for managing your events.
              Our platform is designed with both users and organizers in mind,
              providing tools and features that make event planning and
              participation seamless.
            </p>
            <ul>
              <li className="mb-3">
                Easy-to-use Interface: Our intuitive design ensures that
                managing and attending events is a breeze.
              </li>
              <li className="mb-3">
                24/7 Support: Our dedicated support team is here to assist you
                anytime you need help.
              </li>
              <li className="mb-3">
                Advanced Analytics: Track and analyze your events' performance
                with our powerful tools.
              </li>
            </ul>
          </Container>
        </section>
        <Testimonials />
      </Container>
    </div>
  );
};

export default HomePage;
