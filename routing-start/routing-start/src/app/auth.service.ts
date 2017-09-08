export class AuthService{
    loggedIn = false;

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }

    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject) => {
                setTimeout(
                  () => {
                      resolve(this.loggedIn);
                  }  , 800
                );
            }
        );

        return promise;
    }
}