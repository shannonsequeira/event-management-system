import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteEvent } from '../actions/eventActions';

const DeleteEventPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasConfirmed = useRef(false);

  useEffect(() => {
    if (!hasConfirmed.current) {
      const confirmDelete = window.confirm('Are you sure you want to delete this event?');
      hasConfirmed.current = true;

      if (confirmDelete) {
        dispatch(deleteEvent(id)).then(() => {
          navigate('/events');
        }).catch(error => {
          console.error('Error deleting event:', error);
        });
      } else {
        navigate(`/event/${id}`);
      }
    }
  }, [dispatch, id, navigate]);

  return (
    <div>
      <h1>Deleting Event...</h1>
    </div>
  );
};

export default DeleteEventPage;
