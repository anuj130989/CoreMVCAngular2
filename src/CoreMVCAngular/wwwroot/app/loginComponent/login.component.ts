import { Component } from '@angular/core';
import { AuthenticationService, TokenProviderService } from '../services/index';
import { Router } from '@angular/router';


@Component({
    selector: 'login-comp',
    //moduleId: module.id,
    templateUrl: 'app/loginComponent/login.html',
})
export class LoginComponent {
    private model: any = {};
    constructor(private authenticationService: AuthenticationService, private router: Router, private tokenService: TokenProviderService) { }

    loginCallback(response: any) {
        if (response.statusIsSuccessful) {
            let tokenResponse = JSON.parse(response.responseResult);
            this.tokenService.setToken(tokenResponse.access_token);
            this.router.navigate(['/dashboard']);
        }
        else
            this.model.loginResponse = 'Invalid Credentials';
    }

    login(loginForm: any) {
        this.authenticationService.login(this.model, this.loginCallback.bind(this));
    }
}