import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { likeReducer } from "./likeReducer";

export default combineReducers({
    auth: authReducer,
    likedMeals: likeReducer
})