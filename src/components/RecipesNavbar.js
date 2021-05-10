import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecipesNavbar extends React.Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/">My Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/recipes">Recipes</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/#/login">Login</Nav.Link>
                    <Nav.Link href="/#/signup">Signup</Nav.Link>
                </Nav>


            </Navbar.Collapse>
            </Navbar>
        )

    }
}

export default RecipesNavbar;