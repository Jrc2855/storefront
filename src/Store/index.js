import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./reducer";

//-----Combine Reducers-----\\ - This function combines all of our reducers to ship them out for their purpose
const reducers = combineReducers({
  store: reducer,
});

//-----Store Creation-----\\
const store = () => createStore(reducers, composeWithDevTools());

export default store();