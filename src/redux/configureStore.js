import {combineReducers, createStore} from 'redux';
import {Dishes} from "./dishes";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import {Comments} from "./comments";

export const ConfigureStore = createStore(combineReducers({
    dishes:Dishes,
    leaders: Leaders,
    promotions: Promotions,
    comments : Comments
}
));
