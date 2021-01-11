import React, { Component } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

class App extends Component {
  render() {
    return (
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    );
  }
}

export default App;
