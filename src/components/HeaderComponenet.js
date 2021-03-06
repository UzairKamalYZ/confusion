import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Collapse} from 'reactstrap';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                        <Collapse>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"/>Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                            <span className="fa fa-info fa-lg"/>About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-info fa-lg"/>Menu
                            </NavLink>

                        </NavItem>
                    </Nav>
                        </Collapse>
                    </div>

                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;