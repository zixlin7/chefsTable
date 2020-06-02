import { requestRestaurants} from "./restaurants_actions";

export const UPDATE_SEARCH = "UPDATE_SEARCH"
export const UPDATE_FILTER = "UPDATE_FILTER"
export const DELETE_FILTER = "UPDATE_FILTER"

const changeSearch = (field, value) => ({
    type: UPDATE_SEARCH,
    field,
    value
});

export const updateSearch = (field, value) => (dispatch, getState) => {
        dispatch(changeSearch(field, value));
        return requestRestaurants(getState().ui.search)(dispatch);
        
};

const updateFilter = (cuisineFilter, priceFilter) => ({
    type: UPDATE_FILTER,
    cuisineFilter,
    priceFilter
})

export default updateFilter;



export const resetFilter = () => (dispatch, getState) => {
    // dispatch(deleteFilter());
    return requestRestaurants(getState().ui.search)(dispatch);
};




