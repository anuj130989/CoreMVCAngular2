import { Component } from '@angular/core';

@Component({
    selector: 'dashboard-comp',
    //moduleId: module.id,
    templateUrl: 'app/dashboard/dashboard.html',
})
export class DashboardComponent {
    private model: any = {};
    constructor() { }
}