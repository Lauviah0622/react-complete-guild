import React from 'react';

const person = (props) => {
    return (
        <div>
        <p>I'm {props.name} a {props.age} olds guys</p>
        <p>{props.children}</p>

        </div>
    )
}

export default person
