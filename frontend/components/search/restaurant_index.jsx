import React from "react";
import RestaurantsIndexItem from "../restaurants/restaurant_index_item";

class RestaurantsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
      this.props.requestRestaurants(this.props.search)
    }
    
    checkFilter(){
      return Object.values(this.props.filter).some(filter => filter === true)
    }
 
    render(){
     
        const { restaurants, search, updateSearch, requestRestaurant } = this.props;
        const {allRestaurants, filterRestaurants} = restaurants;
        if(!Object.values(allRestaurants).length) return null;
        let result;
        result = this.checkFilter() ? filterRestaurants : allRestaurants;

        return (
          <div className="restaurant-index">
            
            {Object.values(result).length 
              ? Object.values(result).map((restaurant,i) => (
              <RestaurantsIndexItem key={i} restaurant={restaurant} 
              search = {search}
              updateSearch = {updateSearch}
              requestRestaurant={requestRestaurant}/>
            ))
              : <p>Nothing matches the filter</p>}
          </div>
        );
    }
}

export default RestaurantsIndex;