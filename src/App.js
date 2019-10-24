import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI, I'm react app</h1>
        <p>Hello mother fucker</p> 
        <Person />
        <Person />
        <Person />
      </div>
      // React.createElement('div', {className: 'App'}, 'h1', 'h2', React.createElement('div', null, 'h1'))
    );
  }
}

export default App;
