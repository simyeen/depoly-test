import React, { useState } from 'react';
import loadable from '@loadable/component';
import logo from './logo.svg';
import './App.css';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="APP">
      <header className="APP-header">
        <img src={logo} className="APP-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React! 빵 들고가기
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
};

export default App;
