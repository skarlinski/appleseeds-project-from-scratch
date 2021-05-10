
import  React from 'react';
import { Button, Col, Form, Jumbotron, Modal, Row } from 'react-bootstrap';
import './RecipesPage.css';
class RecipesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            recipeName: '',
            recipeDesc: '',
            recipeImg: ''
        }
    }
    getActiveRecipes = ()=>{
        console.log( this.props.allRecipes);
        const active = this.props.allRecipes.filter((recipe) => {
            if(this.props.activeUser.id == recipe.userId ){
                return true;
            }
        })
        return active;
    }
    handleClose = () =>{
        this.setState({
            isModalOpen: false,
        })
    }
    saveModalInfo = () =>{

        // TODO: Make sure the recipe has all the needed fields
        const newRecipe = {
            name: this.state.recipeName,
            desc: this.state.recipeDesc,
            img: this.state.recipeImg,
            userId: this.props.activeUser.id,
        }
        this.props.addRecipe(newRecipe);

    }
    render(){
        if(  ! this.props.activeUser) {
            window.location.href = "/#/login";
            return null;
        }
        const filteredRecipes = this.getActiveRecipes();
        const recipesCards = filteredRecipes.map(recipe => {
            return (<div>
                <img src={recipe.img}/>
                <h2>{recipe.name}</h2>
            <p>{recipe.desc}</p></div>)
        })
        return (
        <div className="p-recipes">
            
            <Jumbotron>
                <h1>{this.props.activeUser.name}'s recipes</h1>
            </Jumbotron>
            <div className="d-flex ">
                {recipesCards}
           </div>
            <Button onClick={()=>{this.setState({isModalOpen:true})}}>Add recipe</Button>
          
           <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>

  

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                Name:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                    type="text" 
                    placeholder="Recipe Name"
                     value={this.state.recipeName}
                     onChange={(event)=> {this.setState({recipeName: event.target.value})}}
                      />
                </Col>

                <Form.Label column sm={2}>
                Description:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Recipe Description"
                    value={this.state.recipeDesc}
                    onChange={(event)=> {this.setState({recipeDesc: event.target.value})}}
                  />
                </Col>
                <Col sm={10}>
                    <Form.Label column sm={2}>
                    Image:
                    </Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Recipe image"  
                    value={this.state.recipeImg}
                    onChange={(event)=> {this.setState({recipeImg: event.target.value})}}
                    />
                </Col>
                
                
            </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={this.saveModalInfo}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        </div>
        )
    }
}

export default RecipesPage;