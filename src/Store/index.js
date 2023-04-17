import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./products";
import cartReducer from "./cart";
import categoryReducer from "./categories";
import logger from "./middleware/logger";

//-----Combine Reducers-----\\ - This function combines all of our reducers to ship them out for their purpose
const reducers = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

//-----Store Creation-----\\
const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

export default store();