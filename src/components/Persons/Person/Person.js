import React , {Component} from 'react';
import classes from './Person.css';


class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    

    static getDerivedStateFromProps(props, state) {
        // console.log('[Person.js] getDerivedStateFromProps')    
        return state
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} a {this.props.age} olds guys</p>
                <input data-tag="name" onChange={this.props.changed} value={this.props.name}></input><br/>  
                <input data-tag="age" onChange={this.props.changed} value={this.props.age}></input>years   
            </div>
        )
    }
}

export default Person