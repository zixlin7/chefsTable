import { combineReducers } from "redux";
import searchReducers from "./search_reducer";
import filterReducers from "./filter_reducer";

const uiReducer = combineReducers({
    search: searchReducers,
    filter: filterReducers
});

export default uiReducer;