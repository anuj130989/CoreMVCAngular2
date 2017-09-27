import { Injectable } from '@angular/core';

@Injectable()
export class TokenProviderService {
    private token: string;

    setToken(inputToken: string) {
        this.token = inputToken;
        sessionStorage.setItem('token', inputToken);
    }

    getToken() {
        this.token = sessionStorage.getItem('token');
        return this.token;
    }
}