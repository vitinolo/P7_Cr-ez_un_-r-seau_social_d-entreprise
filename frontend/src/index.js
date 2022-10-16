import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

axios.interceptors.request.use(
  config => {
      config.headers = {'Authorization': 'Bearer '+ localStorage.getItem("token")}
      return config;
  },
  error => Promise.reject(error)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);