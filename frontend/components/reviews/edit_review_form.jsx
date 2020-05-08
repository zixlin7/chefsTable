import React from "react"
import ReviewForm from './review_form';

class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReview(this.props.match.params.id)
    }

    render(){
        
        // if(!this.props.review) return null;
        const {review, formType, user, userId, restaurant, action, requestRestaurant} = this.props
        return(<ReviewForm review={review}
            formType={formType}
            user={user}
            userId={userId}
            restaurant={restaurant}
            action={action}
            requestRestaurant={requestRestaurant}
            match={this.props.match}
            history={this.props.history}
        />)
    }
}

export default EditReviewForm;