import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


class RecipesNavbar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        // Show the user managment links conditionally:
        // If activeUser exists, then a user is logged in
        // If activeUser Does not exist - Render login + signup
        // If activeUser exists - Render si
        const loginEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/login">Login</Nav.Link> : null
        const signupEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/signup">Signup</Nav.Link> : null
        const nameEl = (this.props.activeUser) ? <Nav.Link>Hello {this.props.activeUser.name}</Nav.Link> : null
        const logoutEl = (this.props.activeUser) ?  
        <Nav.Link href="/#/" onClick={ () => this.props.logout()}>
            Log out
        </Nav.Link>
        : null

        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/">My Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/recipes">Recipes</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {loginEl}
                    {signupEl}
                    {logoutEl}
                    {nameEl}
                </Nav>


            </Navbar.Collapse>
            </Navbar>
        )

    }
}

export default RecipesNavbar;