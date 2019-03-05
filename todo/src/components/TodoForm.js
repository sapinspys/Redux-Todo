import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '' 
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.todo)
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
            <div onSubmit = {this.handleSubmit}
                className='form-container'>
                <form autoComplete='off'>
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

export default TodoForm;