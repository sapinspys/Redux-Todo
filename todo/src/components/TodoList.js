import React, { Component } from 'react';

import './TodoList.scss';

import { connect } from 'react-redux';
import { toggleTodo, setVisibilityFilter, VisibilityFilters, deleteTodo } from '../actions';

// Must deconstruct before using visibility filter action types
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters

class TodoList extends Component {

    handleToggle = (index) => (e) => {
        // Calling Action Creator:
        this.props.toggleTodo(index);

        // NON-FUNCTIONAL... 
        // MOVED TO EXTERNAL CSS, USING DATA ATTRIBUTES
        // if (this.props.todos[index].completed === false) {
        //     e.target.style.textDecoration = 'line-through';
        // } else {
        //     e.target.style.textDecoration = 'none';
        // }
    }

    renderTodoItems() {
        if (this.props.visibilityFilter === SHOW_ALL) {
            return this.props.todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <li onClick = {this.handleToggle(index)}
                            data-completed={this.props.todos[index].completed}>
                            {todo.text}    
                        </li>
                        <button 
                            onClick={() => this.props.deleteTodo(todo.text)}>
                            x
                        </button>
                    </div>
                )
            })
        } else if (this.props.visibilityFilter === SHOW_COMPLETED) {
            return this.props.todos.filter(todo => todo.completed === true).map((todo, index) => {
                return (
                    <div key={index}>
                        <li onClick = {this.handleToggle(index)}
                            key={index}
                            data-completed="true">
                            {todo.text}    
                        </li>
                            <button 
                            onClick={() => this.props.deleteTodo(todo.text)}>
                            x
                        </button>
                    </div>
                )
            })
        } else {
            return this.props.todos.filter(todo => todo.completed === false).map((todo, index) => {
                return (
                    <div key={index}>
                        <li onClick = {this.handleToggle(index)}
                            key={index}
                            data-completed="false">
                            {todo.text}    
                        </li>
                        <button 
                            onClick={() => this.props.deleteTodo(todo.text)}>
                            x
                        </button>
                    </div>
                )
            })
        }
    }

    render () {
        return (
            <div>
                <p>Visibility: {this.props.visibilityFilter}</p>
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
                <button 
                    onClick={()=>console.log(this.props.todos, this.props.visibilityFilter)}>
                    What's my state?
                </button>
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

export default connect(mapStateToProps, { toggleTodo, setVisibilityFilter, VisibilityFilters, deleteTodo })(TodoList);