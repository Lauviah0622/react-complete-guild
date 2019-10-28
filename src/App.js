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
    ],
    showPersons: false
  }


  // class mehthod
  // 因為是arrow funciton所以沒有this, 不會指向class App
  switchNameHandler = (newName) => { // 名稱後面要加上handler 讓其他人知道這不會被主動呼叫
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: "Jacks", age: "34" },
        { name: "Jackd", age: "45" }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "23" },
        { name: "Jacks", age: "34" },
        { name: "Jackd", age: "45" }
      ]
    })
  }

  toggleShowPersons = () => {
    let showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })
  }

  render() {

    let style = {
      backgroundColor: "#ccc",
      border: "4px solid #ffcccc",
      borderRadius: '4px',
      padding: "8px",
      cursr: 'pointer',
      font: 'inherit'
    }

    let persons = null;

    // 將dom內容放在return外做if判斷
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Ohhhhhhhhhhhhhh!")}
            changed={this.nameChangeHandler}>I am not child!!!</Person>
          {/* 用bind會執行的比較快 */}
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>HI, I'm react app</h1>
        <p>Hello mother fucker</p>
        <button style={style}
          onClick={this.toggleShowPersons}>Show Name</button>
        {/* 用arrow funciton會比較慢 */}
        {persons}
      </div>
    );
  }
}

export default App;
