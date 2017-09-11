import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { FormGroup,FormControl,FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode : boolean = false;
  recipeForm : FormGroup;

  constructor(private currRoute : ActivatedRoute, private recipeService : RecipeService,
  private router : Router) { }

  ngOnInit() {
    this.currRoute.params.subscribe( //remember to clean up
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id']!=null;//same as params['id']!=null?true:false.. as check returns boolean
        console.log(">>> "+this.editMode);
        //call init form when route changes. either change in edit params or without any edit params
        this.initForm();
      }
    );
  }

  private initForm(){
    
    let recipeName =  '';
    let imagepath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      //if edit get recipe being edited and populate form elements with that
      // else empty value
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagepath = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(new FormGroup({//we are grouping hte name and amount of ingredeint together. So form group
            'name' : new FormControl(ing.name, Validators.required),
          'amount' : new FormControl(ing.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagepath' : new FormControl(imagepath, Validators.required),
      'description' : new FormControl(description, Validators.required  ),
      'ingredients' : recipeIngredients
    });
    // console.log('rr', this.recipeForm.value);
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({//new form group as we are adding two fields 
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onSubmit(){
    const newRecipe = new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],
    this.recipeForm.value['imagepath'], this.recipeForm.value['ingredients']);

    //instead of creating the object, we can use this.recipeForm.value as the object within value has 
    //same strcuture and keys as the form elemtents. So we get the same object as above.
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo : this.currRoute});
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
