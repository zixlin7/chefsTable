import {RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION} from "../actions/reservations_actions";
import {RECEIVE_USER} from "../actions/users_actions"


const reservationsReducer = (state={}, action) => {

    const nextState = { ...state };
    switch (action.type) {
      case RECEIVE_ALL_RESERVATIONS:
        return action.reservations;
      case RECEIVE_RESERVATION:
        nextState[action.reservation.id] = action.reservation;
        return nextState;
      case REMOVE_RESERVATION:
        delete nextState[action.reservationId];
        return nextState;
      case RECEIVE_USER:
        return {...state, ...action.payload.reservations}
      default:
        return state;
    }
}

export default reservationsReducer;