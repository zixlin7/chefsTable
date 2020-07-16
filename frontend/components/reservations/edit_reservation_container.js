import { connect } from 'react-redux';
import {
  fetchReservation,
  updateReservation,
  deleteReservation,
} from '../../actions/reservations_actions';
import { requestRestaurant } from '../../actions/restaurants_actions';
import EditReservationForm from './edit_reservation_form';
import { updateSearch } from '../../actions/search_actions';

const mSTP = (state, ownProps) => {
  return {
    reservation: Object.values(state.entities.reservations)[
      Object.values(state.entities.reservations).length - 1
    ],
    restaurant:
      state.entities.restaurants.allRestaurants[ownProps.match.params.id],
    search: state.ui.search,
    user: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) =>
    dispatch(requestRestaurant(restaurantId)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  deleteReservation: (reservationId) =>
    dispatch(deleteReservation(reservationId)),
  updateSearch: (field, value) => dispatch(updateSearch(field, value)),
});

export default connect(mSTP, mDTP)(EditReservationForm);
