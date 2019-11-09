import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        console.log('[Persons.js] construstor')
        super(props)
        this.state = {};
    }
    

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')    
        return (props, state)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState);
        // return true || false來決定說要不要update
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState);
        return {message: 'SnapShot!'}
    }

    componentDidUpdate(pervProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(pervProps, prevState, snapshot);
    }
    


    render() {

        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            })
        )
    }
}

export default Persons