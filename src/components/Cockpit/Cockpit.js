import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let { showPersons, personsLength, buttonClick, buttonRestart } = props; 

    let btnClasses = classes.btn;
    const assignClasses = []
    if (showPersons) {
        btnClasses = [classes.red, classes.btn].join(' ')
    }

    if (personsLength <= 2) {
        assignClasses.push(classes.red);
    }

    if (personsLength <= 1) {
        assignClasses.push(classes.bold);
    }

    if (personsLength === 0) {
        assignClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>Hello mother fucker</p>
            <button className={btnClasses}
                onClick={buttonClick}>Show Name</button>
            <button className={classes.btn}
                onClick={buttonRestart}>Restart</button>
        </div>
    )
}

export default cockpit