import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} a {props.age} olds guys</p>
            <input data-tag="name" onChange={props.changed} value={props.name}></input><br/>  
            <input data-tag="age" onChange={props.changed} value={props.age}></input>years   
        </div>
    )
}

export default person
