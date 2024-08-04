// EventDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {new Date(event.start_date).toLocaleDateString()} - {new Date(event.end_date).toLocaleDateString()}
          </Card.Subtitle>
          <Card.Text>{event.schedule}</Card.Text>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text>{event.venue}</Card.Text>
          <Card.Text>{event.description}</Card.Text>
          {event.photos && <img src={`data:image/jpeg;base64,${event.photos}`} alt="Event" />}
          {event.video_content && (
            <video controls>
              <source src={`data:video/mp4;base64,${event.video_content}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <Card.Text>Ticket Amount: ₹{event.ticket_amount}</Card.Text>
          <Card.Text>Capacity: {event.capacity}</Card.Text>
          <Button variant="primary" as={Link} to={`/edit-event/${id}`} className="mt-3 me-2">Edit</Button>
          <Button variant="danger" as={Link} to={`/delete-event/${id}`} className="mt-3 me-2">Delete</Button>
          <Button variant="secondary" as={Link} to="/events" className="mt-3">Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetail;
