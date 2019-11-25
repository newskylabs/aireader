/**
  Hanzi Reader main file.
 
  Main file of Hanzi Reader.
 
  @file       App.js
 
  @author     Dietrich Bollmann
  @email      dietrich@formgames.org
  @copyright  Copyright 2018 Dietrich Bollmann
  @license    Apache License 2.0, http://www.apache.org/licenses/LICENSE-2.0
  @date       2018/02/25
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <Router basename='/hanzi-reader'>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Hanzi Reader Home</h1>;
}

function About() {
  return <h1>Hanzi Reader About</h1>;
}

function Users() {
  return <h1>Hanzi Reader Users</h1>;
}

/* fin */
