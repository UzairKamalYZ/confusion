import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../state/baseUrl";

export const addComment = (dishId, rating, author, comment)=>({
    type : ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
export const fetchDishes =  ( ) => (dispatch) => {
    dispatch(dishesLoading(true));

    // setTimeout(()=> {
    //     dispatch(addDishes(DISHES))
    // },2000);

    return fetch(baseUrl+"dishes")
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
};

export const dishesLoading = () => ({
type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmessage
});

export const addDishes= (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})