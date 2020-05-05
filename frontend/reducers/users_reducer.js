import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/users_actions";

const usersReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {...state, [action.currentUser.id]: action.currentUser};
        case RECEIVE_USER:
            const nextState = {...state};
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;