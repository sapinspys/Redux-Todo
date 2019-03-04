import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const initialState = {
    VisibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

