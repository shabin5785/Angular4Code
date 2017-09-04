import { Recipe } from './recipe.model';

export class RecipeService{

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSD3gqPIEln-lWVAIAjHJaHKEXiRys_zARNWQmKQ4zZjeAb3a'),
        new Recipe('Second Recipe', 'Hello', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSD3gqPIEln-lWVAIAjHJaHKEXiRys_zARNWQmKQ4zZjeAb3a')
      ];


      getRecipes(){
          return this.recipes.slice();//returns a copy of the array
          //we dont want direct change to the array from outside
      }
    
}