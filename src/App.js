import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SocialLinks from './social_links';
import Home from './home';
import About from './about';
// import Portfolio from './portfolio';
// import Contact from './contact';

function App() {
  return (
    <div className="app">
      <SocialLinks />

      <Switch>
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/" component={Home} />
      </Switch>

      <div className="bars">
        <i/>
        <i/>
        <i/>
      </div>
      <nav className="">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>

    </div>
  );
}

export default App;
