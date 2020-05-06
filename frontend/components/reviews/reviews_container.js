import { connect } from 'react-redux';

import { createReview } from "../../actions/review_actions";
import ReviewForm from './review_form';


const mSTP = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(
    mSTP,
    mDTP
)(ReviewForm);