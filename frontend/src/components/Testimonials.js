import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const testimonialsData = [
  {
    image: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg",
    text: "Gatherly made my event planning so easy and fun!",
    name: "Jane Doe",
  },
  {
    image: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg",
    text: "I loved how user-friendly the platform is. Highly recommend!",
    name: "John Smith",
  },
  {
    image: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg", 
    text: "A fantastic experience from start to finish. Will use again!",
    name: "Alice Johnson",
  },
  {
    image: "/path/to/image4.jpg",
    text: "An excellent platform for event management!",
    name: "Bob Brown",
  },
  {
    image: "/path/to/image5.jpg",
    text: "The best event experience I’ve ever had!",
    name: "Charlie White",
  },
];

const Testimonials = () => {
  const testimonialCardStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Same as card background
    padding: "20px",
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Shadow for a card effect
    marginBottom: "40px", // Space between sections
    color: "white",
  };

  const quoteStyle = {
    fontSize: "2rem",
    color: "#FFC107", // Gold color for the quote icon
    position: "absolute",
    top: "-20px",
    left: "20px",
  };

  const sectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    marginBottom: '40px',
    color: 'white',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ textAlign: "center", color: "white" }}>
        What Our Users Say
      </h2>
      <Row className="justify-content-center">
        {testimonialsData.slice(0, 3).map((testimonial, index) => (
          <Col md={4} key={index}>
            <div
              style={testimonialCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.5)";
              }}
            >
              <div style={quoteStyle}>&ldquo;</div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  marginBottom: "10px",
                }}
              />
              <Card.Body>
                <Card.Text>"{testimonial.text}"</Card.Text>
                <h6>- {testimonial.name}</h6>
              </Card.Body>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
