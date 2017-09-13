import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBrKAE2F17B-LXTa8LGcRmatGJ1EXUg-y0",
      authDomain: "ng-recipe-book-140e6.firebaseapp.com"
    });
  }
 
}
