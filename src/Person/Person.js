import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p>I'm {props.name} a {props.age} olds guys</p>
            <p onClick={props.click}>{props.children}</p>
            <input onChange={props.changed} value={props.name}></input>  
        </div>
    )
}

export default person
