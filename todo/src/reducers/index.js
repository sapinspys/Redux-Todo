import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const initialState = {
    VisibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

// REDUCER HANDLES LOGIC DICTATED BY ACTIONS

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

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                VisibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, actions)
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
}