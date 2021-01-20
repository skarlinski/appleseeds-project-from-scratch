import React from 'react';
import RecipesNavbar from '../components/RecipesNavbar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <RecipesNavbar activeUser={this.props.activeUser}/>
                <div className="c-home-page">Homepage</div>
            </div>
        )
    }
}
export default HomePage;