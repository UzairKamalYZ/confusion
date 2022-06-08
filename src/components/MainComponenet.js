import React from "react";
import {Menu} from "./MenuComponent";
import Home from "./HomeComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./HeaderComponenet";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import {DISHES} from "../state/dishes";
import {COMMENTS} from "../state/comments";
import {LEADERS} from "../state/leader";
import {PROMOTIONS} from "../state/promotions";

export const Main = () => {
    const dishes = DISHES;
    const comments = COMMENTS;
    const promotions = PROMOTIONS;
    const leaders = LEADERS;
    const HomePage = () => {
        return (
            <div>
                <Home dish= {dishes.filter((d) => d.featured)[0]}
                      leader={promotions.filter((d) => d.featured)[0]}
                      promotion={leaders.filter((d) => d.featured)[0]}/>
            </div>
        );
    };
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishes={dishes}/>}/>
                <Route exact path={"/contactus"} component={Contact}/>
                <Redirect to={"/home"}/>
            </Switch>
            <Footer/>
        </div>
    );
}