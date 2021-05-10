import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipesPage from './pages/RecipesPage';
import HomePage from './pages/HomePage';
import RecipesNavbar from './components/RecipesNavbar';

// App is the main component for our Recipe app
// State:
// activeUser: Either null, if no user is logged in, or a user object if a user is logged in


class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        // activeUser: null
        activeUser: {
          id: 1,
          name: 'Yaron',
          email: 'skarlinski@gmail.com',
          pwd: '123'
        }
      }
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
          <Route exact path="/">
             <HomePage></HomePage>
          </Route>
          <Route exact path="/recipes">
            <RecipesPage activeUser={this.state.activeUser}></RecipesPage>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup"> 
            <Signup></Signup>
          </Route>
      </HashRouter>
    );
  }
}

export default App;
