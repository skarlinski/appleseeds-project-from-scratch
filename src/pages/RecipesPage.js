import React from 'react';
import { Button, Row, Jumbotron, Modal, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './RecipesPage.css'
import RecipeCard from '../components/RecipeCard';

import Parse from 'parse';
import RecipeModel from '../models/RecipeModel';
class RecipesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            recipeDesc: '',
            recipeImg: '',
            isModalActive: false,
            userRecipes: []
        }
    }
    openModal = () => {
        this.setState({isModalActive: true});
    }
    
    closeModal = () => {
        this.setState({isModalActive: false});
    }
    handleNewRecipe = () => {
        const newRecipe = {
            name: this.state.recipeName,
            desc: this.state.recipeDesc,
            img: this.state.recipeImg,
            difficulty: 2,
            userId: this.props.activeUser.id,
            id: this.props.allRecipes.length + 1
        }
        this.closeModal();
        this.props.addRecipe(newRecipe);
    }
    componentDidMount(){
        const Recipe = Parse.Object.extend('Recipe');
        const query = new Parse.Query(Recipe);
        query.equalTo("userId",  Parse.User.current());
        query.find().then((results) => {
                const recipes = results.map( (res) => {
                    return new RecipeModel(res)
                });
                this.setState({userRecipes: recipes})
       
        }, (error) => {
     
        console.error('Error while fetching Recipe', error);
        });
    }
    render() {
        if( ! this.props.activeUser){
            return <Redirect push to="/#/login" />
        }
        const recipeElements = this.state.userRecipes.map((recipe) => {
            return (<RecipeCard key={recipe.id} name={recipe.name} img={recipe.img} desc={recipe.desc}/>);
        })
        return (
            <div className="c-recipes-page">
                <Jumbotron>
                <h1 className="text-center">Recipes by {this.props.activeUser.fname}</h1>
                <Button className="ml-auto" onClick={this.openModal}> Add Recipe</Button>
                </Jumbotron>
                <Row className="justify-content-between">
                {recipeElements}
                </Row>
                
                <Modal show={this.state.isModalActive} onHide={()=>{}}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                       
                        <Form.Label>Recipe name</Form.Label>
                        <Form.Control type="text" 
                        onChange={(event) => {this.setState({recipeName: event.target.value})}} 
                        placeholder="" value={this.state.recipeName} />
                                                
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" 
                        onChange={(event) => {this.setState({recipeDesc: event.target.value})}} 
                        placeholder="" value={this.state.recipeDesc} />
                        
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" 
                        onChange={(event) => {this.setState({recipeImg: event.target.value})}} 
                        placeholder="" value={this.state.recipeImg} />

                    

                    </Form> 
                    </Modal.Body>
                    <Modal.Footer>

                    <Button variant="primary" onClick={this.handleNewRecipe}>
                        Save New recipe
                    </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }
}
export default RecipesPage;