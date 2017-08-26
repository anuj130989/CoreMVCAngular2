import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_Urls, HeaderType } from '../constants/index';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    constructor(private http: Http) { }
  /* register(registerForm: any) {
       var headers = this.header.getHeader(HeaderType.FormUrlEncoded);
       this.http.post(API_Urls.AuthenticationAPI, "", { headers: headers }).subscribe(
           value => console.log(value),
           err => console.log(err),
           () => console.log("complete")
       );
    };*/
}