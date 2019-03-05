import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

class TodoList extends Component {
    handleToggle = (index) => (e) => {
        // Calling Action Creator:
        this.props.toggleTodo(index);

        if (e.target.dataset.flag === 'false') {
            e.target.style.textDecoration = 'line-through';
            e.target.setAttribute('data-flag', 'true');
        } else {
            e.target.style.textDecoration = 'none';
            e.target.setAttribute('data-flag', 'false');
        }
    }

    renderTodoItems() {
        return this.props.todos.map((todo, index) => {
            return (
                <li onClick = {this.handleToggle(index)}
                    key={index}
                    data-flag='false'>
                    {todo.text}    
                </li>
            )
        })
    }

    render () {
        return (
            <div>
                <ul>
                    {this.renderTodoItems()}
                </ul>
                <button 
                    onClick = {this.props.setVisibilityFilter(this.props.VisibilityFilters.SHOW_ALL)}>
                    Show All
                </button>
                <button>Completed</button>
                <button>Active</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { toggleTodo, setVisibilityFilter, VisibilityFilters })(TodoList);