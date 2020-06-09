import { UPDATE_FILTER } from "../actions/search_actions";


const _defaultState = {
    "Wine bar": false,
    "Japanese": false,
    "Mexican": false,
    "Modern French": false,
    "New American": false,
    "Contemporary": false,
    1: false,
    2: false,
    3: false,
    4: false
}
const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return action.filterState;
        default:
            return state;
    }
}

export default searchReducer;