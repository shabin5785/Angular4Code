import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode : boolean = false;

  constructor(private currRoute : ActivatedRoute) { }

  ngOnInit() {
    this.currRoute.params.subscribe( //remember to clean up
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id']!=null;//same as params['id']!=null?true:false.. as check returns boolean
        console.log(">>> "+this.editMode);
      }
    );
  }

}
