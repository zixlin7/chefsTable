import React from "react";

class RestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestRestaurants();
        
    }

    mapPriceRange(price){
        const range = ["", "$", "$$", "$$$", "$$$$"]
        return range[price];
    }

    render(){
        // const { restaurants } = this.props
        
        if (!this.props.restaurants.length) return null;
        
        return (
          <div>
            {this.props.restaurants.map((restaurant) => (
              <div>
                <h3>{restaurant.name}</h3>
                <span>{this.mapPriceRange(restaurant.price_range)}</span>
                <span>{restaurant.cuisine}</span>
                <span>{restaurant.city}</span>
                <span>{new Date(restaurant.open_hour).toLocaleString()}</span>
                <span> |  </span>
                <span>{restaurant.open_hour}</span>
              </div>
            ))}
          </div>
        );
    }
}

export default RestaurantsIndex;