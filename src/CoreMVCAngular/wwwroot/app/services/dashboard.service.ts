import { Injectable, Injector, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_Urls, HeaderType } from '../constants/index';
import { APIHeadersService } from './index';
import 'rxjs/add/operator/map'

@Injectable()
export class DashboardService {
    header: APIHeadersService;
    constructor(private http: Http, injector : Injector) {
        setTimeout(() => {
            this.header = injector.get(APIHeadersService);
        });
        
    }

    getAll(callback: Function) {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(API_Urls.DashboardGetAllAPI).map(res => res.json()).subscribe(
            value => callback(value),
            err => console.log(err),
            () => console.log("complete")
        );

    }
}