import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/index';
import { LoginComponent } from './loginComponent/login.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule],
    declarations: [AppComponent, LoginComponent],
    providers: [AuthenticationService, BaseRequestOptions],
    bootstrap: [AppComponent]
})

export class AppModule { }