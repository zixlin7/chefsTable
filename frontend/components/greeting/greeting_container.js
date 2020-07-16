import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchUser } from '../../actions/users_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(Greeting);
