import {
    RECEIVE_RESTAURANT,
}
    from "../actions/restaurants_actions";

const reviewsReducer = (state = {}, action) => {
    
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return {...action.payload.reviews};
        default:
            return state;
    }
}

export default reviewsReducer;