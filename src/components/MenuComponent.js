import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

export const MenuList = ({key, name, image, description}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card key={key}>
                <CardImg width="100%" src={image} alt={name}/>
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
};
export const Menu = ({dishes}) => {
    return (
        <div className="container">
            <div className="row">
                {dishes.map((dish) => (
                    <MenuList key={dish.id} {...dish}/>
                ))}
            </div>
        </div>
    );
};
