// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './App';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ToastContainer />
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
