import React from 'react';
import RecipesNavbar from '../components/RecipesNavbar';

class RecipesPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <RecipesNavbar activeUser={this.props.activeUser}/>
            <div className="c-recipes-page">recipes</div>
            </div>
        )
    }
}
export default RecipesPage;