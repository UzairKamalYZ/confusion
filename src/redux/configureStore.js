import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Dishes} from "./dishes";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import {Comments} from "./comments";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
export const ConfigureStore = createStore(combineReducers({
    dishes:Dishes,
    leaders: Leaders,
    promotions: Promotions,
    comments : Comments
}),
    applyMiddleware(thunk,logger)
);
