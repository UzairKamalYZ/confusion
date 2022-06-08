import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

export const MenuList = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}>
                <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
};
export const Menu = ({dishes}) => {
    return (
        <div className="container">
            <div className="row">
                {dishes.map((dish) => (
                    <MenuList dish={dish}/>
                ))}
            </div>
        </div>
    );
};
