import React from 'react';

const App = () => {
  return (
    <div className="APP">
      <header className="APP-header">
        <img src={logo} className="APP-logo" alt="logo" />
        <p onClick={this.handleClick}> Hello React! 빵 들고가기</p>
        {SplitMe && <SplitMe />}
      </header>
    </div>
  );
};

export default App;
