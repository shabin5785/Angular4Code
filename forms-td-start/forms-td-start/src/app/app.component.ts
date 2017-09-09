import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion="pet";
  answer: string = "";
  genders = ["male", "female"];
  user ={
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:''
  };

  submitted = false;

  @ViewChild('f') signUpFrom : NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpFrom.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   question : '',
    //   gender: 'male'
    // });
    this.signUpFrom.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  // onsubmit(form : NgForm){
  //   console.log("submitted",form);
  // }

  onsubmit(){
    console.log(this.signUpFrom);
    this.submitted = true;
    this.user.username = this.signUpFrom.value.userData.username;
    this.user.email = this.signUpFrom.value.userData.email;
    this.user.secret = this.signUpFrom.value.secret;
    this.user.answer = this.signUpFrom.value.question;
    this.user.gender = this.signUpFrom.value.gender;
    this.signUpFrom.reset();
  }
}
