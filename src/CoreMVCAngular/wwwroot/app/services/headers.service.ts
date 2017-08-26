import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HeaderType } from '../constants/index';

@Injectable()
export class APIHeadersService {
    private headers: Headers;
    constructor() {
        this.headers = new Headers();
    }

    setHeader(headerType: string) {
        switch (headerType) {
            case HeaderType.FormUrlEncoded:
                this.headers.append(HeaderType.ContentType, HeaderType.FormUrlEncoded);
            default:
                this.headers.append(HeaderType.ContentType, HeaderType.ApplicationJson);
        }
    }

    getHeader(headerType: string) {
        this.setHeader(headerType);
        return this.headers;
    }
}