import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

// Must deconstruct before using this
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

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
                    onClick = {() => this.props.setVisibilityFilter(SHOW_ALL)}>
                    Show All
                </button>
                <button 
                    onClick = {() => this.props.setVisibilityFilter(SHOW_COMPLETED)}>
                    Completed
                </button>
                <button
                    onClick = {() => this.props.setVisibilityFilter(SHOW_ACTIVE)}>
                    Active
                </button>
                <button onClick={()=>console.log(this.props.visibilityFilter)}>What's my state?</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(mapStateToProps, { toggleTodo, setVisibilityFilter, VisibilityFilters })(TodoList);