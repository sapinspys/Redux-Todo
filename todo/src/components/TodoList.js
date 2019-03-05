import React, { Component } from 'react';

import { toggleTodo } from '../actions';

class TodoList extends Component {
    renderTodoItems() {
        return this.props.todos.map((todo, index) => {
            return (
                <li onClick = {() => this.props.toggleTodo(todo)}
                    key={index}>
                    {todo.text}    
                </li>
            )
        })
    }

    render () {
        return (
            <ul>
                {this.renderTodoItems()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);