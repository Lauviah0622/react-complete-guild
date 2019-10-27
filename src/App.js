import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // state只有 class(extends Component)可以用, 如果function Component要用類似功能要用react hook
  // state一改變 整個react DOM都會rerender
  state = {
    persons: [
      { name: "Jack", age: "12" },
      { name: "Jackw", age: "23" },
      { name: "Jacks", age: "34" }
    ]
  }


  // class mehthod
  // 因為是arrow funciton所以沒有this, 不會指向class App
  switchNameHandler = () => { // 名稱後面要加上handler 讓其他人知道這不會被主動呼叫
    this.setState({
      persons: [
        { name: "Jacka", age: "123" },
        { name: "Jacks", age: "234" },
        { name: "Jackd", age: "345" }
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>HI, I'm react app</h1>
        <p>Hello mother fucker</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >I am not child!!!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      // React.createElement('div', {className: 'App'}, 'h1', 'h2', React.createElement('div', null, 'h1'))
    );
  }
}

export default App;
