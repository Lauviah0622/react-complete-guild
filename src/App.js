import React, { useState } from 'react'; //useXXXX => React Hook
import './App.css';
import Person from './Person/Person';

const app = () => {

  // useState是16.8的hook功能,這個funciton會return 兩個東西 => (inputState, setInputState)
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Jack", age: "12" },
      { name: "Jackw", age: "23" },
      { name: "Jacks", age: "34" }
    ],
  })
  
  const [otherState, setOtherState] = useState("I'm other state")
  // 如果有用到多個state 可以分開使用useState，這樣就可以個別操作每個state，防止全部取代很麻煩

  
  const switchNameHandler = () => {
    // 使用serInputState可以改變state還有rerender DOM
    setPersonsState({ //setPersonState這個Funciton不是像Compenent.usestate一樣只是改變不同的東西，而是直接全部取代
      persons: [
        { name: "Jacka", age: "34" },
        { name: "Jacks", age: "45" },
        { name: "Jackd", age: "56" }
      ]
    })
    setOtherState("I'm not otherState")
  }
  
  console.log(personsState, otherState)


  return (
    <div className="App">
      <h1>HI, I'm react app</h1>
      <p>Hello mother fucker</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >I am not child!!!</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    // React.createElement('div', {className: 'App'}, 'h1', 'h2', React.createElement('div', null, 'h1'))
  );
}

export default app;
