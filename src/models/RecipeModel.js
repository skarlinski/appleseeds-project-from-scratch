class RecipeModel {
    constructor(recipeObj) {
        this.id = recipeObj.id;
        this.name = recipeObj.get('name')
        this.desc = recipeObj.get('desc')
        this.img = recipeObj.get('img')
        this.userId = recipeObj.get('userId')
    }
}
export default RecipeModel;