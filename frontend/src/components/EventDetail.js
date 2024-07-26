import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`/api/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
          <Card.Text>{event.location}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetail;
