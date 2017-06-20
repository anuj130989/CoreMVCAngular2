import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './loginComponent/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);