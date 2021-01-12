import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profile/veloport">veloport</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profile/gildong">gildong</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={['/about', '/info']} component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
};

export default App;
