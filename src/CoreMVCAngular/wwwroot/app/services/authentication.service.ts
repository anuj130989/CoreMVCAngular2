import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log("logging...");
        this.http.post('/api/Authentication/Authenticate', JSON.stringify({ username: username, password: password }), { headers }).subscribe(
            value => console.log(value),
            err => console.log(err),
            () => console.log("complete")
        );
           
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}