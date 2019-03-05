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
            <div className='form-container'>
                <form onSubmit = {this.handleSubmit} 
                    autoComplete='off'>
                    <input type="text"
                        name="todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                        placeholder='...Todo'/>
                    <button>Add Todo</button>
                </form>
                <button>Clear Completed</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);