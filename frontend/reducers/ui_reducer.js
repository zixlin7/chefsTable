import { combineReducers } from "redux";

import searchReducers from "./search_reducer";

const uiReducer = combineReducers({
    search: searchReducers
});

export default uiReducer;