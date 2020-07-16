import { signupUser, loginUser, logoutUser } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export default clearErrors;

export const signup = (user) => (dispatch) =>
  signupUser(user).then(
    (payload) => dispatch(receiveCurrentUser(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  loginUser(user).then(
    (payload) => dispatch(receiveCurrentUser(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  logoutUser().then((user) => dispatch(logoutCurrentUser()));
