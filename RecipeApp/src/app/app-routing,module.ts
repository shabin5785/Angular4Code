import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from "./home/home.component";

const appRoutes : Routes = [
    // {path :'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'', component: HomeComponent},
    {path:'recipes',loadChildren:'./recipes/recipe.module#RecipesModule'},
    {path :'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRountingModule {

}