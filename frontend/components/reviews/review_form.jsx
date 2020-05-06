import React from React;

class ReviewForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user_id: this.props.user.id,
            restaurant_id: this.props.match.params.id
        }
    }
}