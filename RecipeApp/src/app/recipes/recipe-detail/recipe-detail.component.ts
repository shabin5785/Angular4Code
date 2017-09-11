import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;

  constructor(private recipeService: RecipeService
  , private currRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.currRoute.snapshot.params['id'];
    this.currRoute.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe =this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    //already at recipes/:id.. so just add edit to url. 
    // the second line shows how construct the url with id if needed.
    this.router.navigate(['edit'], {relativeTo: this.currRoute});
    // this.router.navigate(['../',this.id, 'edit'], {relativeTo:this.currRoute});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
