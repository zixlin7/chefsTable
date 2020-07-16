import { connect } from 'react-redux';
import { deleteReservation } from '../../actions/reservations_actions';
import CancelReservation from './cancel_reservation';
import {
  requestRestaurant,
  requestRestaurants,
} from '../../actions/restaurants_actions';

const mSTP = (state, ownProps) => {
  return {
    reservation: Object.values(state.entities.reservations)[
      Object.values(state.entities.reservations).length - 1
    ],
    user: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => ({
  deleteReservation: (reservationId) =>
    dispatch(deleteReservation(reservationId)),
  requestRestaurant: (restaurantId) =>
    dispatch(requestRestaurant(restaurantId)),
  requestRestaurants: () => dispatch(requestRestaurant()),
});

export default connect(mSTP, mDTP)(CancelReservation);
