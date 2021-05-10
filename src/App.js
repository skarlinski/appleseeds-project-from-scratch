import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipesPage from './pages/RecipesPage';
import HomePage from './pages/HomePage';
import RecipesNavbar from './components/RecipesNavbar';
import { Container } from 'react-bootstrap';
import userJSON from './data/users.json';

// App is the main component for our Recipe app
// State:
// activeUser: Either null, if no user is logged in, or a user object if a user is logged in


class App extends React.Component{
  
    constructor(props) {
      super(props);
      let usersData;
      if( localStorage['allUsers']) {usersData= localStorage['allUsers'];}
      else {usersData = userJSON}
      this.state = {
         allUsers: usersData,
         activeUser: null
        // activeUser: {
        //   id: 1,
        //   name: 'Yaron',
        //   email: 'skarlinski@gmail.com',
        //   pwd: '123'
        // }
      }
    }
    addUser = (newUser) =>{
      this.setState({
        activeUser: newUser,
        allUsers: this.state.allUsers.concat(newUser)
      })
      // localStorage['allUsers'] = localStorage['allUsers'].push(newUser) // Will not work sas localStorage is string

    }
    login = (userObj) => {
      this.setState({
        activeUser: userObj
      });
    }
    logout = () => {
      this.setState({
        activeUser: null,
      })
    }
    render() {return (
      <HashRouter>

          <Route exact path={['/', '/recipes']}>
            <RecipesNavbar 
            activeUser={this.state.activeUser}
            logout={this.logout}
            />
          </Route>
          <Container>
          <Route exact path="/">
             <HomePage></HomePage>
          </Route>
          <Route exact path="/recipes">
            <RecipesPage 
            activeUser={this.state.activeUser}>

            </RecipesPage>
          </Route>
          <Route exact path="/login">
            <Login
              allUsers={this.state.allUsers}
              login={this.login}
            />
          </Route>
          <Route exact path="/signup"> 
            <Signup addUser={this.addUser}/>
          </Route>
          </Container>
      </HashRouter>
    );
  }
}

export default App;
