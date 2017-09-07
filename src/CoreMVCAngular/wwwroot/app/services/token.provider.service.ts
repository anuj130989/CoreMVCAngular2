import { Injectable } from '@angular/core';

@Injectable()
export class TokenProviderService {
    private token: string;

    setToken(inputToken: string) {
        this.token = inputToken; 
    }

    getToken() {
        return this.token;
    }
}