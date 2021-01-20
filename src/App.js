import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';

import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';
import SignupPage from './pages/signupPage';
import RecipesNavbar from './components/RecipesNavbar';
import recipeJSON from './data/recipes.json';

// state:
//  activeuser: obj - if a user is logged in, this has an object describing the user. 
//              if Noone is logged in, it equals null
class App extends React.Component{
   
    constructor(props) {
      super(props);
      this.state = {
        //  activeUser: null,
        activeUser: { 
          fname: 'Yaron',
          lname: 'Karlinski',
          id: 1
        },
        allRecipes: recipeJSON,
      }
    }
    addRecipe = (recipeObj) => {
      this.setState({allRecipes: this.state.allRecipes.concat(recipeObj)})
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
              <RecipesPage addRecipe={this.addRecipe} allRecipes={this.state.allRecipes} activeUser={this.state.activeUser}/>
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
