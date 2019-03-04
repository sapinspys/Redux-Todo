import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const { SHOW_ALL } = VisibilityFilters

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

// REDUCER HANDLES LOGIC DICTATED BY ACTIONS

// The todoApp func gives the todos func only the slice 
// of the state that needs to be updated

// REDUCER COMPOSITION

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                } return todo
            })
        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

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

// Turns to the following after extracting independent 
// reducers. Each reducer managers its own part of the
// global state!

function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}