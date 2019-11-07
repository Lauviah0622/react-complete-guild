import React from 'react';
import classes from './Person.css';


const person = (props) => {
    let rdm = Math.random();
    if (rdm > 0.7) {
        throw new Error('Errorrrrrr')
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} a {props.age} olds guys</p>
            <input data-tag="name" onChange={props.changed} value={props.name}></input><br/>  
            <input data-tag="age" onChange={props.changed} value={props.age}></input>years   
        </div>
    )
}

export default person