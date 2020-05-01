
import { connect } from "react-redux";
import { fetchReservation, updateReservation} from "../../actions/reservations_actions";
import { fetchRestaurant } from "../../util/res_api_util";
import EditReservationForm from "./edit_reservation_form"




const mSTP = (state, ownProps) => ({
  reservation: state.entities.reservations[ownProps.match.params.id],
  restaurant: state.entities.restaurants[state.entities.reservations[ownProps.match.params.id]],
  search: state.ui.search
  
});

const mDTP = (dispatch) => ({
  fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
  action: (reservation) => dispatch(updateReservation(reservation)),
});

export default connect(mSTP, mDTP)(EditReservationForm);
