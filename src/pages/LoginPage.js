import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../models/User'

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        
        // Controlled component steps
        // 1. Add key to state
        // 2. map to value
        // 3. update using onChange
        this.state = {
            email: '',
            pwd: ''
        }
    }
    validateLogin = () => {
        Parse.User.logIn(this.state.email ,this.state.pwd).then((user) => {
            // Do stuff after successful login            console.log('Logged in user', user);
            this.props.handleLogin(new UserModel(user));
            window.location = '/#/recipes';
        }).catch(error => {
            console.error('Error while logging in user', error);
        })
    }
    render() {
        // Steps to login
        // 1. if the user exists in the user.json?
        // 2. if the user password matches
        // 3. update the activeUser state in <App> (using handleLogin() prop)
        return (
            <div className="c-login-page">
                <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                onChange={(event) => {this.setState({email: event.target.value})}} 
                placeholder="Enter email" value={this.state.email} />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                 onChange={(event) => {this.setState({pwd: event.target.value})}} 
                 placeholder="Password"  value={this.state.pwd}/>
                </Form.Group>
                <Button onClick={this.validateLogin} block variant="success" type="button">
                Login
                </Button>
            </Form> 
            <br/>
            <a href="/#/signup">To Signup</a>
            </div>
            )
        }
    }
    export default LoginPage;