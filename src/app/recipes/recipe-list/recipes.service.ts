import {Recipe} from '../recipe.model';
export class RecipesService {
    private recipes : Recipe[] = [
        new Recipe('Test Recipe', 'this is a test description', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
        new Recipe('Test Recipe', 'this is a test description', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
      ];

    getRecipes(){
        return this.recipes;
    }
}