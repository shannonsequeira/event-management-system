import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchEvents } from '../actions/eventActions';
import { Link } from 'react-router-dom';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (!Array.isArray(events)) {
    console.error('Events is not an array:', events);
    return <div>Error: Events data is not in the correct format</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Event List</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id || index}>
              <td>{event.id}</td>
              <td>
                <Link to={`/event/${event.id}`}>{event.title}</Link>
              </td>
              <td>{formatDate(event.start_date)}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EventList;
