import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '' 
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        
        // Calling Action Creator:
        this.props.addTodo(this.state.todo) 

        this.setState({
            todo: '' 
        })
    }

    handleChange = e => {
        this.setState({
            todo: e.target.value
        })
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit} 
                autoComplete='off'>
                <input type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    placeholder='...Todo'/>
                <button>Add Todo</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);