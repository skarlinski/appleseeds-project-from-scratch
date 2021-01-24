import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Parse from 'parse';  

import HomePage from './pages/HomePage';

import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';
import SignupPage from './pages/signupPage';
import RecipesNavbar from './components/RecipesNavbar';
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'ALRDAKbeOO0Ypv3DP0UmDVFYWuCqsN1Ds4YSyAW1', // This is your Application ID
  'EuOVW5CF3Hoipwgq4zDaiPMi54Jb6klJ6FlX0ZjO' // This is your Javascript key
);

// state:
//  activeuser: obj - if a user is logged in, this has an object describing the user. 
//              if Noone is logged in, it equals null

class App extends React.Component{

  //// THESE ARE SOME CHANGES
  // They will only appear in the parse branch


   // To use localStorage:
   // 1. Check if the key already exists  e.g  if(localStorage.getItem('localRecipes'))
   // 2. Convert value to Object - JSON.parse
   // 3. Put into state
   // 4. Everytime the state changes, also update the localstorage (using JSON.stringify)
    constructor(props) {
      super(props);

      this.state = {  
         activeUser: null,

      }
    }
    addRecipe = (recipeObj) => {
      this.setState({allRecipes: this.state.allRecipes.concat(recipeObj)});
      localStorage.setItem('localRecipes', JSON.stringify(
        this.state.allRecipes.concat(recipeObj)
      ))
    } 
    handleLogin = (userObj) => {
      this.setState({activeUser: userObj})
    }
    handleLogout = () => {
      this.setState({activeUser: null})
    }
    render() {return (
      <HashRouter>
        <Route exact path={['/', '/recipes']}>
        <RecipesNavbar handleLogout={this.handleLogout} activeUser={this.state.activeUser}/>
        </Route>
        <Container>
          <Switch>
            <Route exact path="/">
              <HomePage activeUser={this.state.activeUser}/>
            </Route>
            <Route exact path="/recipes">
              <RecipesPage addRecipe={this.addRecipe}  activeUser={this.state.activeUser}/>
            </Route>
            <Route exact path="/login">
              <LoginPage handleLogin={this.handleLogin}/>
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>

          </Switch> 
      </Container>
      </HashRouter>
    );
  }
}

export default App;
