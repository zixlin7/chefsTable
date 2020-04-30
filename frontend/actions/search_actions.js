import { requestRestaurants} from "./restaurants_actions";

export const UPDATE_SEARCH = "UPDATE_SEARCH"

const changeSearch = (field, value) => ({
    type: UPDATE_SEARCH,
    field,
    value
});

export const updateSearch = (field, value) => (dispatch, getState) => {
        dispatch(changeSearch(field, value));
        return requestRestaurants(getState().ui.search)(dispatch);
        // delicious curry!
};