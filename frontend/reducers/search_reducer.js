import {UPDATE_SEARCH, UPDATE_FILTER} from "../actions/search_actions";
import getDate from "../util/date_util"

const defaultState = {
    party: 2,
    time: "16:00",
    date: getDate(),
    city: ""
}
const searchReducer = (state = defaultState, action) => {
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

