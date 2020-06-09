import { requestRestaurants} from "./restaurants_actions";
import resSelector from "../util/restaurants_selector";
import updateFilterRestaurants from "./filter_actions"

export const UPDATE_SEARCH = "UPDATE_SEARCH"
export const UPDATE_FILTER = "UPDATE_FILTER"
export const DELETE_FILTER = "DELETE_FILTER"

const changeSearch = (field, value) => ({
    type: UPDATE_SEARCH,
    field,
    value
});

export const updateSearch = (field, value) => (dispatch, getState) =>{
        dispatch(changeSearch(field, value));
        return (
            requestRestaurants(getState().ui.search)(dispatch)
            .then(res => dispatch(updateFilterRestaurants(resSelector(res.restaurants, getState().ui.filter))))
        )
};
//updateFilter(getState().ui.filter)

const updateFilter = (filterState) => ({
    type: UPDATE_FILTER,
    filterState
});

export default updateFilter;


export const resetFilter = () => (dispatch, getState) => {
    // dispatch(deleteFilter());
    return requestRestaurants(getState().ui.search)(dispatch);
};




