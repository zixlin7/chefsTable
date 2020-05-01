import {connect} from "react-redux";

import {createReservation} from "../../actions/reservations_actions";
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
    restaurantName: state.entities.restaurants[parseInt(ownProps.match.params.id)].name,
    reservation: state.entities.reservations
    // formType: "Create Reservation",
   
    })
}

const mDTP = dispatch => ({
    action: reservation => dispatch(createReservation(reservation))
});

export default connect(mSTP, mDTP)(ReservationForm);