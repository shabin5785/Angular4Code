import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm : FormGroup;
  forbiddenUsernames =['cris','anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.checkforbiddenNames.bind(this)]),
        'email' : new FormControl(null,[Validators.required, Validators.email],[this.checkForbiddenEmails.bind(this)])
      }),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  addHobbies(){
  const control  = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  checkforbiddenNames(control : FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) != -1){
      return {'nameIsForbidden': true}
    }
    else{

    }
  }

  checkForbiddenEmails(control : FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>( (resolve,reject) => {
      setTimeout( () => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }
        else{
          resolve(null);
        }
      } ,1500);
    });
    return promise;
  }
}
