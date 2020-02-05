import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import './styles/reset.css';
import './styles/index.css';
import './styles/app.css';
import './styles/social_links.css';
import './styles/home.css';
import './styles/profile.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/contact.css';
import './styles/mobile.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);