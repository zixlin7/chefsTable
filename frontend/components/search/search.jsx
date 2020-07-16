import React from 'react';
import RestaurantsIndex from './restaurant_index';
import SearchForm from './search_form';
import Filters from './filters';

const Search = ({
  restaurants,
  search,
  filter,
  updateSearch,
  requestRestaurant,
  requestRestaurants,
  updateFilter,
  resetFilter,
}) => {
  return (
    <div className="search-container">
      <div className="res-search">
        <SearchForm search={search} updateSearch={updateSearch} />
      </div>
      <div className="res-main">
        <Filters
          restaurants={restaurants}
          search={search}
          filter={filter}
          updateFilter={updateFilter}
          updateSearch={updateSearch}
          resetFilter={resetFilter}
        />
        <RestaurantsIndex
          restaurants={restaurants}
          search={search}
          filter={filter}
          updateSearch={updateSearch}
          requestRestaurants={requestRestaurants}
          requestRestaurant={requestRestaurant}
        />
      </div>
    </div>
  );
};

export default Search;
