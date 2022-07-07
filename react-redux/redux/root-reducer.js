import { combineReducers } from "redux";

import buySomeReducer from "./reducers/buy-some-reducer";
import buyMoreReducer from "./reducers/buy-more-reducer";

const rootReducer = combineReducers({
    some: buySomeReducer,
    more: buyMoreReducer
});

export default rootReducer;