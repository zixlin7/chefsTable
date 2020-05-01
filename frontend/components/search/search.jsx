import React from "react";
import RestaurantsIndex from "./restaurant_index";
import SearchForm from "./search_form";

const Search = ({ restaurants, search, updateSearch, requestRestaurant, requestRestaurants }) =>{
    return(
        <div>
            <SearchForm updateSearch={updateSearch}/>
            <RestaurantsIndex restaurants={restaurants} search = {search}
            updateSearch={updateSearch}
            requestRestaurants={requestRestaurants}
            requestRestaurant={requestRestaurant} />
        </div>
    )
}

export default Search;