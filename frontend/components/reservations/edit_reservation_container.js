import React from "react";
import { connect } from "react-redux";
import { fetchReservation, updateReservation} from "../../actions/reservations_actions";
import ReservationForm from "./reservation_form";

class EditReservationForm extends React.Component {
  componentDidMount() {
    this.props.fetchReservation(this.props.match.params.id);
  }
  render() {
    // DO NOT MODIFY THIS FUNCTION
    const { action, formType, reservation } = this.props;

    // Hint: The report will not exist on the first render - what do we need to
    // do to get it?
    if (!reservation) return null;
    return (
      <ReservationForm
        action={action}
        formType={formType}
        reservation={reservation}
      />
    );
  }
}

const mSTP = (state, ownProps) => ({
  reservation: state.entities.reservations[ownProps.match.params.id],
  formType: "Update Reservation",
});

const mDTP = (dispatch) => ({
  fetchReservation: (reservationId) =>
    dispatch(fetchReservation(reservationId)),
  action: (reservation) => dispatch(updateReservation(reservation)),
});

export default connect(mSTP, mDTP)(EditReservationForm);
