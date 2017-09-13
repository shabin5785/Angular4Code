import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private router : Router){}

    token : string;
    signUpUser(email : string, password : string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

    signInUser(email: string, password : string){
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                (response) => {
                    console.log(response);
                   
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token : string) => {
                                this.token = token;
                            }
                        )
                        this.router.navigate(['/recipes']);
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    getToken(){
         firebase.auth().currentUser.getToken()
            .then(
                (token : string) => {
                    this.token = token;
                }
            )
            //below we might return expired token . that case is not handled in this project.
            return this.token;
    }

    isAuthenticated(){
        return this.token !=null;
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null;
    }
}