import { RECEIVE_RESERVATION_ERRORS } from '../actions/reservations_actions';

const reservationErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;

    default:
      return state;
  }
};

export default reservationErrorsReducer;
