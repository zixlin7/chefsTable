import * as ReservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

const receiveAllReservations = (reservations) => ({
  type: RECEIVE_ALL_RESTAURANTS,
  reservations
});

const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const removeReservation = (reservationId) => ({
  type: REMOVE_RESERVATION,
  reservationId,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const fetchAllReservations = () => (dispatch) =>
         ReservationAPIUtil.fetchAllReservations().then((reservations) =>
           dispatch(receiveAllReservations(reservations))
         );

export const fetchReservation = (reservationId) => (dispatch) =>
         ReservationAPIUtil.fetchReservation(reservationId)
         .then((reservation) => dispatch(receiveReservation(reservation)));

export const createReservation = (reservation) => (dispatch) =>
         ReservationAPIUtil.createReservation(reservation).then((reservation) =>
           dispatch(receiveReservation(reservation), (err) =>
             dispatch(receiveErrors(err.responseJSON))
           )
         );

export const updateReservation = (reservation) => (dispatch) =>
         ReservationAPIUtil.updateReservation(reservation).then((reservation) =>
           dispatch(receiveReservation(reservation), (err) =>
             dispatch(receiveErrors(err.responseJSON))
           )
         );

  export const deleteReservation = (reservationId) => (dispatch) =>
    ReservationAPIUtil.deleteReservation(reservationId).then((reservationId) =>
      dispatch(removeReservation(reservationId))
    );
