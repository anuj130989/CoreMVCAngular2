import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './loginComponent/index';
import { RegisterComponent } from './registerComponent/index';
import { DashboardComponent } from './dashboard/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: LoginComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);