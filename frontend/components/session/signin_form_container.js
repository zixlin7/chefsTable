import {connect} from "react-redux";
import {login, clearErrors} from "../../actions/session_actions"
import SigninForm from "./signin_form"


const mSTP = (state, ownProps) => ({
    errors: state.errors
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SigninForm);