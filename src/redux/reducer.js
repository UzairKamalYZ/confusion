import {DISHES} from "../state/dishes";
import {COMMENTS} from "../state/comments";
import {LEADERS} from "../state/leader";
import {PROMOTIONS} from "../state/promotions";
export const initialState = {
     dishes : DISHES,
     comments : COMMENTS,
     promotions : PROMOTIONS,
     leaders : LEADERS
};

export const Reducer = (state = initialState,action) => {
    return state;
};