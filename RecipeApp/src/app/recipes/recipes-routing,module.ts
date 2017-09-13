
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipeRoutes : Routes = [
    //below path changed from recipes to ''. we are loading recipes modules dyanamically in route 
    // in main routing file. SO below is relatively loaded and so dont need path
    {path :'', component: RecipesComponent, children:[
        { path:'', component: RecipeStartComponent},
        { path:'new', component: RecipeEditComponent, canActivate:[AuthGuardService]},
        { path:':id', component: RecipeDetailComponent},
        { path:':id/edit', component: RecipeEditComponent}
    ]}
]

@NgModule({
    imports : [
        RouterModule.forChild(recipeRoutes)
    ],
    exports : [RouterModule]
})
export class RecipesRoutingModule{

}