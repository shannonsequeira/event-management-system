import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './components/Dashboard';
import EventForm from './components/EventForm';
import EventDetail from './components/EventDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-event" element={<EventForm />} />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
