// DeleteEventPage.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteEvent } from '../actions/eventActions';

const DeleteEventPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      dispatch(deleteEvent(id)).then(() => {
        history.push('/');
      }).catch(error => {
        console.error('Error deleting event:', error);
      });
    } else {
      history.push(`/event/${id}`);
    }
  }, [dispatch, id, history]);

  return (
    <div>
      <h1>Deleting Event...</h1>
    </div>
  );
};

export default DeleteEventPage;
