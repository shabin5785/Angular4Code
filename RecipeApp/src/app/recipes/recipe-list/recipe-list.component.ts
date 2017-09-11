import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription : Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router, private currRoute : ActivatedRoute) {
  }

  ngOnInit() {
    //below needed as we return slice of array from service. so push and subscribe
    this.subscription = this.recipeService.recipesChanges.subscribe(
      (recipes : Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.currRoute});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
