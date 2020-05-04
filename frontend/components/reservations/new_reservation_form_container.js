import {connect} from "react-redux";

import {createReservation, updateReservation, deleteReservation} from "../../actions/reservations_actions";
import ReservationForm from "./reservation_form"

const mSTP = (state, ownProps) =>{
    
    return({
    // reservation: {
    //     user_id: state.session.id,
    //     restaurant_id: ownProps.match.params.id,
    //     number_of_party: state.ui.search.party,
    //     time: state.ui.search.time,
    //     date: state.ui.search.date
    // },
    search: state.ui.search,
    user: state.entities.users[state.session.id],
    restaurant: state.entities.restaurants[parseInt(ownProps.match.params.id)],
    reservations: state.entities.reservations
    // formType: "Create Reservation",
   
    })
}

const mDTP = dispatch => ({
    createReservation: reservation => dispatch(createReservation(reservation)),
    updateReservation: reservation => dispatch(updateReservation(reservation)),
    deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
});

export default connect(mSTP, mDTP)(ReservationForm);