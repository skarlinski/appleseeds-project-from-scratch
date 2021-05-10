import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipesPage from './pages/RecipesPage';
import HomePage from './pages/HomePage';

class App extends React.Component{

    render() {return (
      <HashRouter>
          <Route exact path="/">
             <HomePage></HomePage>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup"> 
            <Signup></Signup>
          </Route>
          <Route exact path="/recipes">
            <RecipesPage></RecipesPage>
          </Route>
      </HashRouter>
    );
  }
}

export default App;
