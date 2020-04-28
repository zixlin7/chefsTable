import {signupUser, loginUser, logoutUser} from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors= errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = currentUser => dispatch => signupUser(currentUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
    

export const login = currentUser => dispatch => loginUser(currentUser)
    .then(user => dispatch(receiveCurrentUser(user),
          error => dispatch(receiveErrors(error.responseJSON))));

export const logout = () => dispatch => logoutUser()
    .then(() => dispatch(logoutCurrentUser()),
        error => dispatch(receiveErrors(error.responseJSON)));

