import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { Button } from 'antd';

import { LinkButton } from '../../elements';

import About from '../../routes/About';
import Home from '../../routes/Home';
import Topics from '../../routes/Topics';

const App = () => {
  return (
    <Router>
      <div>
        <LinkButton to="/" type="link">home</LinkButton>
        <LinkButton to="/about" type="link">About</LinkButton>
        <LinkButton to="/topics" type="link">Topics</LinkButton>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  </Router>
  );
};

export default App;
