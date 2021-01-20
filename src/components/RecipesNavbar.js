import {  Nav, Navbar } from "react-bootstrap";

// will show login/signup for unregistered users & logout to registered users
// Props:
//  activeUser - an object describing the user
const RecipesNavbar = function(props) {
    const handleLogout = function(){};

    const loginEl = (props.activeUser == null) ? <Nav.Link href="/#/login">Login</Nav.Link>  : null;
    const signupEl = (props.activeUser == null) ?<Nav.Link href="/#/signup">Signup</Nav.Link>  : null;

    const logoutEl = (props.activeUser != null) ?   <Nav.Link onclick={handleLogout}>Logout</Nav.Link> : null;
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">RecipesBook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/#/recipes">Recipes</Nav.Link>
    </Nav>

  </Navbar.Collapse>
  <Nav className="ml-auto">
        {loginEl}
        {signupEl}
        {logoutEl}
      

    </Nav>
</Navbar>
    )
}
export default RecipesNavbar;