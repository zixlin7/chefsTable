import {UPDATE_SEARCH} from "../actions/search_actions";

const searchReducer = (state={}, action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            const nextState = {...state}
            nextState[action.field] = action.value
            return nextState;
        
        default:
            return state;
    }
}

export default searchReducer;

