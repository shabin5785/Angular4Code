import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRountingModule } from './app-routing,module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/datastorage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SharedModule } from "./shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AuthModule } from "./auth/auth.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRountingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
