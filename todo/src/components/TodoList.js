import React, { Component } from "react";

import "./TodoList.scss";

import { connect } from "react-redux";
import {
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
  deleteTodo
} from "../actions";

// Must deconstruct before using visibility filter action types
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

class TodoList extends Component {
  handleToggle = index => e => {
    // Calling Action Creator:
    this.props.toggleTodo(index);

    // NON-FUNCTIONAL...
    // MOVED TO EXTERNAL CSS, USING DATA ATTRIBUTES
    // if (this.props.todos[index].completed === false) {
    //     e.target.style.textDecoration = 'line-through';
    // } else {
    //     e.target.style.textDecoration = 'none';
    // }
  };

  renderTodoItems() {
    let filteredTodos = this.props.todos;

    if (this.props.visibilityFilter === SHOW_COMPLETED) {
      filteredTodos = filteredTodos.filter(todo => todo.completed === true);
    } else if (this.props.visibilityFilter === SHOW_ACTIVE) {
      filteredTodos = filteredTodos.filter(todo => todo.completed === false);
    } 
    
    return filteredTodos.map((todo, index) => {
      return (
        <div key={index}>
          <li
            onClick={this.handleToggle(index)}
            data-completed={todo.completed}
          >
            {todo.text}
          </li>
          <button onClick={() => this.props.deleteTodo(todo.text)}>x</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="todoContainer">
        <ul className="list">{this.renderTodoItems()}</ul>
        <div className="buttonContainer">
          <button onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>
            Show All
          </button>
          <button
            onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
          >
            Completed
          </button>
          <button onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}>
            Active
          </button>
          <button
            onClick={() =>
              console.log(this.props.todos, this.props.visibilityFilter)
            }
          >
            What's my state?
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo, setVisibilityFilter, VisibilityFilters, deleteTodo }
)(TodoList);
