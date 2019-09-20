import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (<div data-test="component-app">
      <h1 data-test="counter-display">the counter is currently</h1>
      <button data-test="increment-button">
        Increment
      </button>
    </div>);
  }
}

export default App;
