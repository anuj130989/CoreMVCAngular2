import { Injectable, Injector, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_Urls, HeaderType } from '../constants/index';
import { APIHeadersService, TokenProviderService } from './index';
import 'rxjs/add/operator/map'

@Injectable()
export class DashboardService {
    private header: APIHeadersService;
    private tokenService: TokenProviderService;
    constructor(private http: Http, injector: Injector) {
        this.header = injector.get(APIHeadersService);
        this.tokenService = injector.get(TokenProviderService);
    }

    getAll(callback: Function) {
        let accessToken = this.tokenService.getToken();
        let headers = new Headers({ 'content-type': 'application/json', 'authorization': 'Bearer ' + accessToken });
        let options = new RequestOptions({ headers: headers });

        this.http.get(API_Urls.DashboardGetAllAPI, options).map(res => res.json()).subscribe(
            value => callback(value),
            err => console.log(err),
            () => console.log("complete")
        );

    }
}