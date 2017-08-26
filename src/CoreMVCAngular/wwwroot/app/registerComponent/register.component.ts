import { Component } from '@angular/core';
import { RegistrationService } from '../services/index';
import { API_Urls } from '../constants/index'

@Component({
    selector: 'register-comp',
    //moduleId: module.id,
    templateUrl: 'app/registerComponent/register.html',
})
export class RegisterComponent {
    private model: any = {};
    constructor(private registrationService: RegistrationService) {
        debugger;
        this.model = { error: [] };
    }

    updateRegisterResponse(responseList: any) {
        this.model.registerResponse = responseList;
    }

    register(registerForm: any) {        
        this.registrationService.register(this.model, this.updateRegisterResponse.bind(this));
    }
}