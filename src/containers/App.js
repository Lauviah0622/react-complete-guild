import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  // state只有 class(extends Component)可以用, 如果function Component要用類似功能要用react hook
  // state一改變 整個react DOM都會rerender1
  originalPersonsInfo = [
    { id: "qtasd", name: "Jack", age: "12" },
    { id: "qweqt", name: "Jackw", age: "23" },
    { id: "qeyyh", name: "Jacks", age: "34" }
  ]

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDeriveStateFromProps', props)
    return state;
  }

  // 重要, Both
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState);
    // return true || false來決定說要不要update
    return true;
  }

  // 重要，Creation
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  // 重要，Update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate', prevProps, prevState);
    return { message: 'App.js SnapShot!' }
  }

  // 重要，Update
  componentDidUpdate(pervProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate')
    console.log(pervProps, prevState, snapshot);
  }

  /*
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
  */
  // 上面的已經被棄用了，原本會在componentDidMount之前執行，現在已經被getDerivedStateFromProps取代


  state = {
    persons: [
      { id: "qtasd", name: "Jack", age: "12" },
      { id: "qweqt", name: "Jackw", age: "23" },
      { id: "qeyyh", name: "Jacks", age: "34" }
    ],
    showPersons: false
  };
  // 以前的寫法是要在constructor裡面this.state，現在可以直接拿出來寫，就相等於以前的寫法


  // class mehthod
  nameChangeHandler = (event, id) => {
    // console.log(event.target.value)
    // console.dir(event.target.dataset)
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

  restartPerson = () => {
    const originInfo = this.originalPersonsInfo.map(person => {
      return Object.assign({}, person)
    });
    // console.log(originInfo)
    this.setState({ persons: originInfo })
  }

  render() {
    console.log('[App.js] rendering...');
    let persons = null;

    // 將dom內容放在return外做if判斷
    if (this.state.showPersons) {
      persons = <Persons
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        persons={this.state.persons} />
    }



    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          buttonClick={this.toggleShowPersons}
          buttonRestart={this.restartPerson}
        />
        {/* 用arrow funciton會比較慢 */}
        {persons}
      </div>
    );
  }
}

export default App;
// 這種deport 被function處理過的component 稱為higher order component?
// 可以增加新的功能~
