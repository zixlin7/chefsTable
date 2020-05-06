import { connect } from "react-redux";
import { signup, login} from "../../actions/session_actions";
import clearErrors from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = (state, ownProps) => ({
  errors: state.errors,
});

const mDTP = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SignupForm);
