import { Component } from '@angular/core';
import { Response } from '@angular/http'
import { DataStorageService } from '../shared/datastorage.service';
import {  AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response : Response) => {
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();//no need to subscribe and get data as the service handles this.
  }

  onLogOut(){
    this.authService.logOut();
  }

}
