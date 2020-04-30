import React from "react";
import RestaurantsIndex from "./restaurant_index";
import SearchForm from "./search_form";

const Search = ({ restaurants, updateSearch, requestRestaurant }) =>{
    return(
        <div>
            <SearchForm updateSearch={updateSearch}/>
            <RestaurantsIndex restaurants={restaurants} 
            requestRestaurant={requestRestaurant} />
        </div>
    )
}

export default Search;