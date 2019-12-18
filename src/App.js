// =========================================================
// Copyright 2019 Dietrich Bollmann
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ---------------------------------------------------------
// 
// @overview    AIReader Application main file.
// 
// @author      Dietrich Bollmann
// @email       dietrich@formgames.org
// @copyright   Copyright 2019 Dietrich Bollmann
// @license     Apache License 2.0, http://www.apache.org/licenses/LICENSE-2.0
// @date        2019/12/17
// 
// ---------------------------------------------------------

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import AIReader from './AIReader';

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
  return <AIReader />
}

function About() {
  return <h1>Hanzi Reader About</h1>;
}

function Users() {
  return <h1>Hanzi Reader Users</h1>;
}

// =========================================================
// =========================================================

// fin.
