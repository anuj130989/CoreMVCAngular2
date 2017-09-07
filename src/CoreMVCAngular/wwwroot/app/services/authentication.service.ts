import { Injectable, Injector, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_Urls, HeaderType } from '../constants/index';
import { APIHeadersService } from './index';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    header: APIHeadersService;
    constructor(private http: Http, injector : Injector) {
        setTimeout(() => {
            this.header = injector.get(APIHeadersService);
            console.log(this.header);
        });
        
    }

    login(loginModel: any, callback: Function) {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(API_Urls.AuthenticationAPI, JSON.stringify(loginModel), 
            options).map(res => res.json()).subscribe(
            value => {
                callback(value);
            },
            err => console.log(err),
            () => console.log("complete")
        );

    }
}