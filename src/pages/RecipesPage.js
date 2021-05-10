import  React from 'react';
import './RecipesPage.css';
class RecipesPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(  ! this.props.activeUser) {
            window.location.href = "/#/login";
            return null;
        }
        return (
        <div className="p-recipes">
            I am Recipe page
        </div>
        )
    }
}

export default RecipesPage;