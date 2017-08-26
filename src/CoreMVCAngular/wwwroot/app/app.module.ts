import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AuthenticationService, RegistrationService, APIHeadersService } from './services/index';
import { LoginComponent } from './loginComponent/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './registerComponent/register.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule],
    declarations: [AppComponent, LoginComponent, RegisterComponent, DashboardComponent],
    providers: [AuthenticationService, APIHeadersService, BaseRequestOptions, RegistrationService],
    bootstrap: [AppComponent]
})

export class AppModule { }