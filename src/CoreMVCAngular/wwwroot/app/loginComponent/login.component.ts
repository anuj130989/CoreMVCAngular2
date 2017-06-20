import { Component } from '@angular/core';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'login-comp',
    //moduleId: module.id,
    templateUrl: 'app/loginComponent/login.html',
})
export class LoginComponent {
    private model: any = {};
    constructor(private authenticationService: AuthenticationService) { }

    login(loginForm : any) {
        console.log(loginForm);
        debugger;
        this.authenticationService.login("asd", "tsd");
    }
}