import React from "react";

class ReviewForm extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.review

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.requestRestaurant(this.props.match.params.id)
    }

    updateForm(field){
        return e => this.setState({[field] : e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.requestRestaurant(this.props.restaurant.id)
        this.props.action(this.state)
            .then(this.props.history.push(`/restaurants/${this.props.restaurant.id}`))
    }

    render(){
        if(!this.props.restaurant) return null;
        if(!this.props.review) return null;
        return(

            <div>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <h1>{this.props.user.firstname}, Share you experience at {this.props.restaurant.name}</h1>
                     <p>* Rating:</p>
                    <fieldset className="rating-input" onChange={this.updateForm("rating")} defaultValue={this.state.rating}>
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label className="full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="5" />
                            <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label className="full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="4" />
                            <label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label className="full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="3" />
                            <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label className="full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="2" />
                            <label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label className="full" for="star1" title="Sucks big time - 1"></label>
                            <input type="radio" id="starhalf" name="rating" value="1" />
                            <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </fieldset>

                    <p>* Title:</p>
                     <input id="title-input" type="text" onChange={this.updateForm("title")} value={this.state.title}/>

                    <p>* Details:</p>
                    <textarea id="body-input" onChange={this.updateForm("body")} value={this.state.body}/>

                    <button id="reservation-button" type="submit">Submit</button>

                </form>

            </div>
        )
    }
}

export default ReviewForm;