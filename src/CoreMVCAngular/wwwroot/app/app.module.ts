import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbdModalComponent, NgbdModalContent } from './modalComponent/index';
import { AuthenticationService, RegistrationService, APIHeadersService, DashboardService, TokenProviderService } from './services/index';
import { LoginComponent } from './loginComponent/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './registerComponent/register.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule
        , NgbModule.forRoot(),
        FormsModule, routing, HttpModule],
    declarations: [AppComponent, LoginComponent, RegisterComponent, DashboardComponent, NgbdModalComponent, NgbdModalContent],
    providers: [AuthenticationService, APIHeadersService, BaseRequestOptions, RegistrationService, DashboardService, TokenProviderService, NgbdModalComponent],
    bootstrap: [AppComponent],
    entryComponents: [NgbdModalContent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }