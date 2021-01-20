import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';
import SignupPage from './pages/signupPage';

function App() {
  return (
    <HashRouter>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/recipes">
            <RecipesPage/>
          </Route>
        </Switch> 
    </div>
    </HashRouter>
  );
}

export default App;
