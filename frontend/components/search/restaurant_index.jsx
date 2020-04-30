import React from "react";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";

class RestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestRestaurants();
        
    }


    render(){
        // const { restaurants } = this.props
        
        if (!this.props.restaurants.length) return null;
        
        return (
          <div className="restaurant-index">
            {this.props.restaurants.map((restaurant,i) => (
              <RestaurantsIndexItem key={i} restaurant={restaurant} requestRestaurant={this.props.requestRestaurant}/>
            ))}
          </div>
        );
    }
}

export default RestaurantsIndex;