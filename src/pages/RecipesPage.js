import React from 'react';
import { Redirect } from 'react-router-dom';
import RecipesNavbar from '../components/RecipesNavbar';

class RecipesPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if( ! this.props.activeUser){
            return <Redirect push to="/#/login" />
        }
        return (
            <div className="c-recipes-page">recipes</div>
        )
    }
}
export default RecipesPage;