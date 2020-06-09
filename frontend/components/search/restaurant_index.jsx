import React from "react";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";

class RestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
      this.props.requestRestaurants(this.props.search)
    }
    
 
    render(){
     
        const { restaurants, search, updateSearch, requestRestaurant } = this.props;
        if(!Object.values(restaurants).length) return null;
        const {allRestaurants, filterRestaurants} = restaurants;
        let result;
        if (filterRestaurants && Object.values(filterRestaurants).length){
          result = filterRestaurants;
        } else {
          result = allRestaurants;
        }
        
        return (
          <div className="restaurant-index">
            {Object.values(result).map((restaurant,i) => (
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