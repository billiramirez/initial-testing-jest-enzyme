import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      error: false
    }
  }

  onClickButton = (action)=> {
    const {counter, error} = this.state;
    if(action) {
      error ? this.setState({counter: counter + 1, error: false}) : this.setState({counter: counter + 1});
    } else{
      if(counter < 0 || counter - 1 < 0){
        this.setState({error: true});      
      }else {
        this.setState({counter: counter - 1});
      }
    }
  }
  render(){
    return (<div data-test="component-app">
      <h1 data-test="counter-display">the counter is currently {this.state.counter} </h1>
      <button data-test="increment-button" onClick={() => this.onClickButton('inc')}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={() => this.onClickButton()}>
        Decrement
      </button>
      { 
        this.state.error && (<div>The counter can not be below zero</div>)
      }
    </div>);
  }
}

export default App;
