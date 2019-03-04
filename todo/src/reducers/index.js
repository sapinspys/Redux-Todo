import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const initialState = {
    VisibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

// REDUCER HANDLES LOGIC DICTATED BY ACTIONS

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                VisibilityFilter: action.filter
            })
    }
}