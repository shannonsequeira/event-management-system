import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createEvent } from '../actions/eventActions';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEvent(formData));
  };

  return (
    <Container className="mt-3">
      <h1 className="mb-4">Create Event</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEventTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Enter event title" value={formData.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEventDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" placeholder="Enter event description" value={formData.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEventDate" className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEventLocation" className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" placeholder="Enter event location" value={formData.location} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Create Event</Button>
      </Form>
    </Container>
  );
};

export default EventForm;
