import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSD3gqPIEln-lWVAIAjHJaHKEXiRys_zARNWQmKQ4zZjeAb3a'),
    new Recipe('Second Recipe', 'Hello', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSD3gqPIEln-lWVAIAjHJaHKEXiRys_zARNWQmKQ4zZjeAb3a')
  ];

  constructor() { }


  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeWasSelected.emit(recipeSelected);
  }

  ngOnInit() {
  }

}
