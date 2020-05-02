
import { connect } from "react-redux";
import { fetchReservation, updateReservation} from "../../actions/reservations_actions";
import {requestRestaurant} from "../../actions/restaurants_actions"
import EditReservationForm from "./edit_reservation_form";
import { updateSearch} from "../../actions/search_actions";




const mSTP = (state, ownProps) => {
  // const getReservationId = (restaurantId) => {
  //   for(let key in state.entities.reservations){
  //     if (state.entities.reservations[key].restaurant_id === restaurantId){
  //       return state.entities.reservations[key];
  //     }
  //   }
  // }

  return({
  reservation: Object.values(state.entities.reservations)[(Object.values(state.entities.reservations).length - 1)],
  restaurant: state.entities.restaurants[ownProps.match.params.id],
  search: state.ui.search})
  
};

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  updateSearch: (field, value) => dispatch(updateSearch(field, value))
});

export default connect(mSTP, mDTP)(EditReservationForm);
