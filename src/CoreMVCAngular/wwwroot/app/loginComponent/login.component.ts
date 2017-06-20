import { Component } from '@angular/core';

@Component({
    selector: 'login-comp',
    //moduleId: module.id,
    templateUrl: 'app/loginComponent/login.html',
})
export class LoginComponent {
    private model: any = {};

    login(loginForm : any) {
        console.log(loginForm);
    }
}