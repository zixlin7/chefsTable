import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/users_actions";
import {
    RECEIVE_RESTAURANT,
}
    from "../actions/restaurants_actions";

const usersReducer = (state={}, action) => {
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {...state, [action.payload.user.id]: action.payload.user};
        case RECEIVE_USER:
            const nextState = {...state};
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case RECEIVE_RESTAURANT:
            return { ...state, ...action.payload.users}
        default:
            return state;
    }
}

export default usersReducer;