import {connect} from "react-redux";

import {createReservation} from "../../actions/reservations_actions";
import ReservationForm from "./reservation_form"

const mSTP = (state, ownProps) =>({
    reservation: {
        user_id: state.session.id,
        restaurant_id: ownProps.match.params.id,
        number_of_party: null,
        time: null
    },
    formType: "Create Reservation"
})

const mDTP = dispatch => ({
    action: reservation => dispatch(createReservation(reservation))
});

export default connect(mSTP, mDTP)(ReservationForm);