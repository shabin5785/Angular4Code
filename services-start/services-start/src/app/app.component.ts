import { Component,OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [AccountService] -- moved to app component .. so available thorughout app
})
export class AppComponent implements OnInit {

  //just a reference variable of the same type as the account service array
  // we will use this reference to access the account service array
  accounts : {name:string, status : string}[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
 
}
