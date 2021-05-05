import { LIKED_MEAL } from "../actionTypes";

const initialState = {
    meals: [],
}

export function likeReducer (state = initialState, action){
    switch (action.type) {
        case LIKED_MEAL: return { ...state, meals: [...state.meals, action.meal]}
        default:
            return state;
    }
}