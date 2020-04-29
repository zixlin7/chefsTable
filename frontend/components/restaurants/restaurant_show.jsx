import React from "react";

class RestaurantShow extends React.Component{
    componentDidMount(){
        this.props.requestRestaurant(this.props.match.params.id)
    }

    render(){
        if (!this.props.restaurant) return null;
        const {restaurant} = this.props;
        return(
        <div>
            <nav>
                <a>Overview</a>
                <a>Photos</a>
                <a>Menu</a>
                <a>Reviews</a>
            </nav>

            <h1>{restaurant.name}</h1>
        </div>
        )
    }
}

export default RestaurantShow;