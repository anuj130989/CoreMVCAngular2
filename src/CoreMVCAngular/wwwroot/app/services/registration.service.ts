import { Injectable, Injector, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_Urls, HeaderType } from '../constants/index';
import { APIHeadersService } from './index';
import 'rxjs/add/operator/map'

@Injectable()
export class RegistrationService {
    header: APIHeadersService;
    constructor(private http: Http, injector : Injector) {
        setTimeout(() => {
            this.header = injector.get(APIHeadersService);
            console.log(this.header);
        });
        
    }

    register(formValue: any, callback: Function) {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(JSON.stringify(formValue));
        this.http.post(API_Urls.RegisterationAPI, JSON.stringify(formValue), 
            options).map( res => res.json()).subscribe(
            value => {
                if (!value.success) {
                    callback(value.error);
                } else {
                    callback([{ 'description': 'Congratulations! Registration sucessful' }]);
                }
            },
            err => console.log(err),
            () => console.log("complete")
        );
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}