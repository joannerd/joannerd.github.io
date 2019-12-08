import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './app';

import './styles/reset.css';
import './styles/index.css';
import './styles/app.css';
import './styles/social_links.css';
import './styles/home.css';
import './styles/about.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);