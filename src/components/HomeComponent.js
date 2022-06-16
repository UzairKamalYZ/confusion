import React, {useEffect} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from "./LoadingComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchDishes} from "../redux/ActionCreators";
import {baseUrl} from "../state/baseUrl";

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={baseUrl+item.image} alt={item.image} />
             {/*Image for dish would be available .. rest of them are gone.. to make it .. they should also be brought from json-server..*/}
             {/*for the moment i am duplicating the code to be enable to see those images..*/}
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}
function RenderCardWithLocalImages({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.image} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    const dishes = useSelector(state => state.dishes);

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchDishes())
    }, [])

    let filteredDishes = dishes.dishes;

    if(!dishes.isLoading){
        filteredDishes = dishes.dishes.filter((d) => d.featured)[0];
    }

    return(

        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                   <Loading show={dishes.isLoading}/>
                    <RenderCard item={filteredDishes}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardWithLocalImages item={props.promotions} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardWithLocalImages item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;