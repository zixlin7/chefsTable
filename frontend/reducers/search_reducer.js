import {UPDATE_SEARCH} from "../actions/search_actions";

const searchReducer = (state={country: "US"}, action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            return {[action.field]: action.value};
        default:
            return state;
    }
}

export default searchReducer;