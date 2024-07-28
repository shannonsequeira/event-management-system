**Gatherly - Simplify Your Events, Amplify Your Experience**

## Project Overview

`event-management-system` is a comprehensive platform designed to streamline event management for both organizers and participants. The application features user authentication, event creation, management, registration, and ticketing.

## Key Features

- **User Authentication and Authorization**: Secure login and registration.
- **Dashboard**: Event organizers can create and manage events.
- **Event Listing**: Search and filter events.
- **Event Registration and Ticketing**: Register for events and manage tickets.
- **Email Notifications**: Reminders for upcoming events.

## Project Structure

```plaintext
event-management-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── eventController.js
│   ├── middleware/
│   │   └── corsMiddleware.js
│   ├── models/
│   │   ├── eventModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js 
│   │   └── eventRoutes.js
│   ├── uploads/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   │   ├── authActions.js
│   │   │   └── eventActions.js
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── EditEvent.js
│   │   │   ├── EventDetails.js
│   │   │   ├── EventForm.js
│   │   │   ├── EventList.js
│   │   │   ├── Navbar.js
│   │   │   └── UserProfile.js
│   │   ├── pages/
│   │   │   ├── EditEventPage.js
│   │   │   ├── EventPage.js
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   └── UserProfilePage.js
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   ├── eventReducer.js
│   │   │   └── index.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setUpTests.js
│   └── store.js
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

## Installation Instructions

> **Root (event-management-system)**
>
> > - Install concurrently in the root of your project
> >
> > ```sh
> > npm install concurrently --save-dev
> > ```
> >
> > ```sh
> > npm install -g concurrently
> > ```
> >
> **Backend**
>
> > - Initializing a new Node.js project
> >
> > ```sh
> > npm init -y
> > ```
> >
> > - Installing backend dependencies
> >
> > ```sh
> > npm install express mysql2 dotenv jsonwebtoken bcryptjs cors
> > ```
> >
> > ```sh
> > npm install cors
> > ```
> >
> > ```sh
> > npm install multer
> > ```
> >
> > ```sh
> > npm install bcryptjs jsonwebtoken
> > ```

> **Frontend**
>
> > - Installing frontend dependencies
> >
> > ```sh
> > npm install axios redux react-redux redux-thunk jwt-decode
> > ```
> >
> > - Installing react-router-dom for routing
> >
> > ```sh
> > npm install react-router-dom
> > ```
> >
> > - Installing redux-devtools-extension for Redux debugging
> >
> > ```sh
> > npm install redux-devtools-extension
> > ```
> >
> > - Installing @reduxjs/toolkit and react-redux for Redux state management
> >
> > ```sh
> > npm install @reduxjs/toolkit react-redux
> > ```
> >
> > - Installing react-bootstrap and bootstrap for UI components
> >
> > ```sh
> > npm install react-bootstrap bootstrap
> > ```
> >
> > - Installing react-icons for icons
> >
> > ```sh
> > npm install react-icons
> > ```
> >
> > ```sh
> > npm install chart.js react-chartjs-2
> > ```
> >
> > ```sh
> > npm install react-toastify
> > ```

## Running the Project Simultaneously

You can use tools like `concurrently` or `npm-run-all` to run both the frontend and backend servers at the same time. Use command `npm start` from root directory to run both concurrently.
Ensure a script in the root `event-management-system` named `package.json` file to manage this.

```json
{
  "scripts": {
    "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
    "start:frontend": "cd frontend && npm start",
    "start:backend": "cd backend && npm start"
  }
}
```

## Current Progress

- **Backend**: 
  - Basic setup completed with user authentication, event management endpoints, and database connectivity.
  - Implemented  authentication of user login and registration.
  - Generated jwt token for hashing passwords while storing them.
  - Added event and user models to define the structure and relationships of the data stored in the database.
  - Database has been updated to implement triggers and handle user profile data as well while following a file system approach to store images and videos.
  - Created an uploads directory to store uploaded images and videos.
- **Frontend**: 
  - Updated implementation of create event form and integrated with the backend.
  - Event listing has been linked to respective event details.
  - Registration and login form structure has been completed and are functional.
  - Implemented toast notifications to provide updates on success or failure for login and register features.


## Future Aspects to Complete

### Backend and API Integration

- **Test API Endpoints**: Ensure all necessary endpoints (e.g., GET, POST, PUT, DELETE) are implemented and tested.
- **Test Error Handling**: Verify proper error handling and meaningful error messages.
- **Implement User Profile**: Allow users to view and edit their profile.
- **Complete Event Details Component**: Allow users to view complete data about selected event.
- **Implement Event Registration**: Allow users to register for events.
- **General & Personalized Dashboards**: Allow users to view their individual stats. Allow users to view stats of all events hosted.

### Front-End Features

- *Event Listing*: Ensure proper display of events and handle various states (loading, error).
- *Event Creation*: Verify functionality and form clearing after submission.
- *Event Editing*: Implement update functionality for events.
- *Event Deletion*: Add functionality to delete events and UI for confirmation.
- *Form Validation*: Enhance client-side validation for required fields.
- *Responsive Design*: Ensure UI is responsive across devices and screen sizes.

### State Management

- **Redux Integration**: Verify Redux store and actions setup.
- **Error Handling**: Implement handling for failed requests in Redux actions.

### User Experience

- **Loading States**: Implement indicators for asynchronous operations.
- **Error Messages**: Display user-friendly error messages.

### Testing

- **Unit Tests**: Write tests for components and Redux actions using Jest and React Testing Library.
- **Integration Tests**: Test component interactions with Redux store.
- **End-to-End Tests**: Test the entire application workflow using Cypress.

### Deployment

- **Production Build**: Ensure correct production build and environment variables.
- **Hosting**: Deploy to a hosting service (e.g., Vercel, Netlify) and test production environment.

### Documentation

- **Code Comments**: Add comments for clarity.
- **README**: Update with detailed project information.

### Security

- **Input Validation**: Validate and sanitize user inputs.
  **Authentication**: Implement authentication and authorization if required.

### Performance Optimization

- **Code Splitting**: Improve loading times.
- **Lazy Loading**: Use for components and images.

### Accessibility

- **Accessibility Features**: Ensure the application is accessible to users with disabilities.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with a clear description of the changes you propose. Ensure that all tests pass and that your changes are well-documented.

## Acknowledgements

- **Express** - Fast, unopinionated, minimalist web framework for Node.js
- **React** - A JavaScript library for building user interfaces
- **Redux** - A predictable state container for JavaScript apps
- **Bootstrap** - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web
- **Axios** - Promise based HTTP client for the browser and node.js
- **MySQL** - Open source relational database management system
