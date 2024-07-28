import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEvent, editEvent } from '../actions/eventActions';
import { Button, Form } from 'react-bootstrap';

const EditEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const eventDetails = useSelector((state) => state.events.find(event => event.id === id));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (!eventDetails) {
      dispatch(fetchEvent(id));
    } else {
      setTitle(eventDetails.title);
      setDescription(eventDetails.description);
      setDate(eventDetails.date);
    }
  }, [dispatch, eventDetails, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editEvent(id, { title, description, date }))
      .then(() => navigate(`/events/${id}`))
      .catch(error => console.error('Error editing event:', error));
  };

  if (!eventDetails) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1>Edit Event</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formEventTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formEventDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formEventDate" className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Update Event</Button>
      </Form>
    </div>
  );
};

export default EditEvent;
