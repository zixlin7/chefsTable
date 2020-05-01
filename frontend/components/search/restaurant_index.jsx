import React from "react";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";

class RestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

 
    render(){
      
        const { restaurants } = this.props
        
      if (!Object.values(this.props.restaurants).length) return null;
        
        return (
          <div className="restaurant-index">
            {Object.values(this.props.restaurants).map((restaurant,i) => (
              <RestaurantsIndexItem key={i} restaurant={restaurant} 
              search = {this.props.search}
              requestRestaurant={this.props.requestRestaurant}/>
            ))}
          </div>
        );
    }
}

export default RestaurantsIndex;