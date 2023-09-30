
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AuthReducer } from "./AuthRedux/reducer";
import { reducer as SignUpReducer } from "./SignUpRedux/reducer";
import thunk from "redux-thunk";
import { legacy_createStore,applyMiddleware, combineReducers } from "redux";
import { reducer as CartReducer } from "./Cart/reducer";
import { reducer as productReducer } from "./Product/reducer";

const rootReduder = combineReducers({
    CartReducer,
  AuthReducer, SignUpReducer,productReducer
})

export const store = legacy_createStore(rootReduder,applyMiddleware(thunk))

