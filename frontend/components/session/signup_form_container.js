import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = (state, ownProps) => ({
  errors: state.errors,
});

const mDTP = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SignupForm);
