import React from "react";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";

class RestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    
 
    render(){
     
        const { restaurants, search, updateSearch, requestRestaurant } = this.props
        
      if (!Object.values(restaurants).length) return null;
        
        return (
          <div className="restaurant-index">
            {Object.values(restaurants).map((restaurant,i) => (
              <RestaurantsIndexItem key={i} restaurant={restaurant} 
              search = {search}
              updateSearch = {updateSearch}
              requestRestaurant={requestRestaurant}/>
            ))}
          </div>
        );
    }
}

export default RestaurantsIndex;