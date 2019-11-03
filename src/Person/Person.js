import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I'm {props.name} a {props.age} olds guys</p>
            <input data-tag="name" onChange={props.changed} value={props.name}></input><br/>  
            <input data-tag="age" onChange={props.changed} value={props.age}></input>years   
        </div>
    )
}

export default Radium(person);
