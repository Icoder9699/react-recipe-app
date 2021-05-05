import { LIKED_MEAL } from "../actionTypes";

export function likeMeal(meal){
    return{
        type: LIKED_MEAL,
        meal: meal
    }
}


