// EditEvent.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEvent, editEvent } from '../actions/eventActions';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const EditEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector(state => state.events.find(event => event.id === parseInt(id)));

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    schedule: '',
    start_date: '',
    end_date: '',
    location: '',
    venue: '',
    ticket_amount: '',
    capacity: '',
    user_id: '',
    photos: null,
    video_content: null
  });

  useEffect(() => {
    if (!event) {
      dispatch(fetchEvent(id));
    } else {
      setFormData(event);
    }
  }, [dispatch, id, event]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editEvent(id, formData)).then(() => {
      navigate(`/event/${id}`);
    }).catch(error => {
      console.error('Error editing event:', error);
    });
  };

  return (
    <Container className="mt-3">
      <h1 className="mb-4">Edit Event</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formEventTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter event title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formEventDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Enter event description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formEventSchedule" className="mb-3">
              <Form.Label>Schedule</Form.Label>
              <Form.Control
                type="text"
                name="schedule"
                placeholder="Enter event schedule"
                value={formData.schedule}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEventStartDate" className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="formEventLocation" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="Enter event location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEventVenue" className="mb-3">
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type="text"
                name="venue"
                placeholder="Enter event venue"
                value={formData.venue}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEventPhotos" className="mb-3">
              <Form.Label>Photos</Form.Label>
              <Form.Control
                type="file"
                name="photos"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEventVideoContent" className="mb-3">
              <Form.Label>Video Content</Form.Label>
              <Form.Control
                type="file"
                name="video_content"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEventTicketAmount" className="mb-3">
              <Form.Label>Ticket Amount</Form.Label>
              <Form.Control
                type="number"
                name="ticket_amount"
                placeholder="Enter ticket amount"
                value={formData.ticket_amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEventCapacity" className="mb-3">
              <Form.Label>Capacity</Form.Label>
              <Form.Control
                type="number"
                name="capacity"
                placeholder="Enter event capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditEvent;
