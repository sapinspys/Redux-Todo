import { combineReducers } from "redux";

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  DELETE_TODO,
  VisibilityFilters
} from "../actions";

const { SHOW_ALL } = VisibilityFilters;

// REDUCERS HANDLE LOGIC DICTATED BY ACTIONS

// INI STATE ONLY NEEDED WITHOUT PROPER REDUCER COMPOSITION

// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// }

// REDUCER COMPOSITION

// The todoApp function gives the todos function only
// the slice of the state that needs to be updated.
// Same deal with the visibilityFilter function.

let count = 0;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      ++count;
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: count
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// AFTER EXTRACTING ADD_TODO and TOGGLE_TODO:

// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state, {
//                 VisibilityFilter: action.filter
//             })
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, actions)
//             })
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {
//                 todos: todos(state.todos, action)
//             })
//         default:
//             return state
//     }
// }

// After extracting all independent reducers, each reducer
// managers its own part of the global state!

// export default function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

// We can take it a step further and perform the same
// logic as above using combineReducers.

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
