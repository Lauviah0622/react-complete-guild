import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  // state只有 class(extends Component)可以用, 如果function Component要用類似功能要用react hook
  // state一改變 整個react DOM都會rerender
  state = {
    persons: [
      { id: "qtasd", name: "Jack", age: "12" },
      { id: "qweqt", name: "Jackw", age: "23" },
      { id: "qeyyh", name: "Jacks", age: "34" }
    ],
    showPersons: false
  };


  // class mehthod
  nameChangeHandler = (event, id) => {
    console.log(event.target.value)
    console.dir(event.target.dataset)
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });
    // copy person
    let persons = [...this.state.persons];
    // change person name
    if (event.target.dataset.tag === 'name') {
      persons[personIndex].name = event.target.value;
    } else if (event.target.dataset.tag !== 'name') {
      persons[personIndex].age = event.target.value;
    }

    this.setState({ persons: persons })
  };

  toggleShowPersons = () => {
    let showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    // spread operator可以return array東西
    persons.splice(personIndex, 1)
    // 這裡直接更改原資料，會造成問題，應該先複製一個資料的副本再做更動
    this.setState({ persons: persons })
    console.log(persons)
  };

  render() {

    let btnClass = classes.btn;
    console.log(typeof btnClass);
    let persons = null;

    // 將dom內容放在return外做if判斷
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}
        </div>
      )

      btnClass = [classes.red, classes.btn].join(' ')

    }


    let assignClasses = [];

    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    if (this.state.persons.length === 0) {
      assignClasses.push(classes.bold);
    }



    return (
      <div className={classes.App}>
        <h1>HI, I'm react app</h1>
        <p className={assignClasses.join(' ')}>Hello mother fucker</p>
        <button className={btnClass}
          onClick={this.toggleShowPersons}>Show Name</button>
        {/* 用arrow funciton會比較慢 */}
        {persons}
      </div>
    );
  }
}

export default App;
// 這種deport 被function處理過的component 稱為higher order component?
// 可以增加新的功能~
