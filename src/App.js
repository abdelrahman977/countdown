import React , { Component } from 'react'
import './App.css';
import Count from './Components/Count';

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* Calling Count view */}
         <Count />
      </div>
    );
  }
}

export default App;
