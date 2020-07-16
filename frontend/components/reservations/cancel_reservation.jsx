import React from 'react';
import { Link } from 'react-router-dom';

class CancelReservation extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick= this.handleClick.bind(this)
  }
  componentDidMount() {
    // this.props.requestRestaurant(this.props.match.params.id)
    this.props.deleteReservation(this.props.reservation.id);
  }

  render() {
    // if (!this.props.reservation) return null;
    return (
      <div className="cancel">
        <h1>
          {this.props.user.firstname}, your reservation has been canceled.
        </h1>
        <Link id="back-to-home" to="/">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default CancelReservation;
