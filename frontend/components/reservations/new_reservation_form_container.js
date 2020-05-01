import {connect} from "react-redux";

import {createReservation} from "../../actions/reservations_actions";
import ReservationForm from "./reservation_form"

const mSTP = (state, ownProps) =>{
    debugger
    return({
    reservation: {
        user_id: state.session.id,
        restaurant_id: ownProps.match.params.id,
        number_of_party: null,
        time: null
    },
    search: state.ui.search,
    user: state.entities.users,
    restaurantName: state.entities.restaurants[parseInt(ownProps.match.params.id)].name,
    formType: "Create Reservation"
    })
}

const mDTP = dispatch => ({
    action: reservation => dispatch(createReservation(reservation))
});

export default connect(mSTP, mDTP)(ReservationForm);