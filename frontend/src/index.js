import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import axios from 'axios';

//lier le token à chaque requête
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
