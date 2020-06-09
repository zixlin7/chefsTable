import selectReservationsByUser from "../../selector";
import {connect} from "react-redux";
import UserProfile from "./user_profile";
import {fetchUser} from "../../actions/users_actions"

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    reservations: selectReservationsByUser(state, state.session.id),
    restaurants: state.entities.restaurants.allRestaurants
});

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(UserProfile);