import { Component } from '@angular/core';
import { APIHeadersService } from './services/index';

@Component({
    selector: 'core-app',
    templateUrl: 'app/app.component.html',
    providers: [APIHeadersService]
})
export class AppComponent {
}