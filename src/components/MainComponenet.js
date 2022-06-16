import React from "react";
import {Menu} from "./MenuComponent";
import Home from "./HomeComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./HeaderComponenet";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchDishes} from "../redux/ActionCreators";


export function Main(props) {
    const dispatch = useDispatch();

    const promotions = useSelector(state => state.promotions)
    const leaders = useSelector(state => state.leaders)


    const HomePage = () => {


        return (
            <div>
                <Home promotions={promotions.filter((d) => d.featured)[0]}
                      leader={leaders.filter((d) => d.featured)[0]}/>
            </div>
        );
    };

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu />}/>
                <Route exact path={"/contactus"} component={Contact}/>
                <Redirect to={"/home"}/>
            </Switch>
            <Footer/>
        </div>
    );
}