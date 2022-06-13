import React from "react";
import {Menu} from "./MenuComponent";
import Home from "./HomeComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./HeaderComponenet";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import {useSelector} from "react-redux";


export function Main(props) {
    let state = useSelector((state => state));
    const HomePage = () => {
        return (
            <div>
                <Home dish={state.dishes.filter((d) => d.featured)[0]}
                      leader={state.promotions.filter((d) => d.featured)[0]}
                      promotion={state.leaders.filter((d) => d.featured)[0]}/>
            </div>
        );
    };
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishes={state.dishes}/>}/>
                <Route exact path={"/contactus"} component={Contact}/>
                <Redirect to={"/home"}/>
            </Switch>
            <Footer/>
        </div>
    );
}