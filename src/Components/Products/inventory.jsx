import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from ".";

let reducers = combineReducers({
  quantity: productReducer,
});

const inventory = () => {
  return createStore(reducers, composeWithDevTools());
}

export default inventory();