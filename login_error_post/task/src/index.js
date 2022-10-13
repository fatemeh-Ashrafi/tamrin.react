import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './Post/Features/Users'

const store = configureStore({
  reducer:{
    posts : usersReducer,
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

