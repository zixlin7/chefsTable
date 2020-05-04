import React from "react";
import RestaurantsIndex from "./restaurant_index";
import SearchForm from "./search_form";
import Filters from "./filters"

const Search = ({ restaurants, search, updateSearch, requestRestaurant, requestRestaurants, updateFilter }) =>{
    return(
        <div className="search-container">
            <div className="res-search">
                <SearchForm updateSearch={updateSearch}/>
            </div>
            <RestaurantsIndex restaurants={restaurants} search={search}
                updateSearch={updateSearch}
                requestRestaurants={requestRestaurants}
                requestRestaurant={requestRestaurant} />
            <Filters restaurants={restaurants} search={search}
                updateFilter={updateFilter}
                updateSearch={updateSearch}/>
        </div>
    )
}

export default Search;