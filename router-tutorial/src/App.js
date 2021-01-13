import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

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
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path={['/about', '/info']} component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/history" component={HistorySample}></Route>
        <Route
          path="/new"
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
