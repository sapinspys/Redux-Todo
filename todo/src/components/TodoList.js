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
  };

  renderTodoItems() {
    let filteredTodos = []
    if (this.props.visibilityFilter === SHOW_ALL) {
      filteredTodos = this.props.todos;
    } else if (this.props.visibilityFilter === SHOW_COMPLETED) {
      filteredTodos = this.props.todos.filter(todo => todo.completed === true);
    } else if (this.props.visibilityFilter === SHOW_ACTIVE) {
      filteredTodos = this.props.todos.filter(todo => todo.completed === false);
    } 
    
    return filteredTodos.map(todo => {
      return (
        <div key={todo.id}>
          <li
            onClick={this.handleToggle(todo.id)}
            data-completed={todo.completed}
          >
            {todo.text}
          </li>
          <button onClick={() => this.props.deleteTodo(todo.id)}>x</button>
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
