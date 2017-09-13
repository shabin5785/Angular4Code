import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServersService{

    constructor(private http: Http){}

    storeServers(servers : any[]){
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('https://ang4http.firebaseio.com/data.json',servers,{headers : headers});
    }

    getServers(){
        return this.http.get('https://ang4http.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log("...",data);
                    // for(const s of data){
                    //     console.log('>>>'+s);
                    //     for(let a of s){
                    //         a.name = "F_"+a.name;
                            
                    //     }
                    // }
                    return data;//Map operator will take this data and convert to a new observable
                }
            )
            .catch(
                (error : Response) => {
                    // console.log(error);
                    return Observable.throw('Something went wrong');
                }
            )
            ;
    }

    getAppName(){
        return this.http.get('https://ang4http.firebaseio.com/appname.json')
            .map(
                (response : Response) => {
                    return response.json();
                }
            )
    }

}