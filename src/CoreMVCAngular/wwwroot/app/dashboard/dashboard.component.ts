import { Component } from '@angular/core';
import { DashboardService } from '../services/index';

@Component({
    selector: 'dashboard-comp',
    //moduleId: module.id,
    templateUrl: 'app/dashboard/dashboard.html',
})
export class DashboardComponent {
    private model: any = { dashboardList: [] };
    constructor(private dashboardService: DashboardService) {
        this.getDashboardItems();
    }

    updateDashboardList(dashboardList: any) {
        this.model.dashboardList = dashboardList;
    }

    getDashboardItems() {
        this.dashboardService.getAll(this.updateDashboardList.bind(this));
    }
}