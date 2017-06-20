﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginComponent/login.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, LoginComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }