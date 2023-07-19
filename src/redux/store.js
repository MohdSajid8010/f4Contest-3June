import prodReducers from "./reducers/prodReducers";
import cartReducer from "./reducers/cartReducer";

import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

let rootReducer=combineReducers({
prod_data:prodReducers,
cart_data:cartReducer,
})

let store = createStore(rootReducer , applyMiddleware(thunk));
export default store;
