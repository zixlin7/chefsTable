import React from "react";
import RestaurantsIndex from "./restaurant_index";
import SearchForm from "./search_form";
import Filters from "./filters"

const Search = ({ restaurants, search, updateSearch, requestRestaurant, requestRestaurants, updateFilter }) =>{
    
    return(
        <div className="search-container">
            <div className="res-search">
                <SearchForm search={search} updateSearch={updateSearch}/>
            </div>
            <div className="res-main">
                <Filters restaurants={restaurants} search={search}
                    updateFilter={updateFilter}
                    updateSearch={updateSearch}/>
                <RestaurantsIndex restaurants={restaurants} search={search}
                    updateSearch={updateSearch}
                    requestRestaurants={requestRestaurants}
                    requestRestaurant={requestRestaurant} />
            </div>
        </div>
    )
}

export default Search;