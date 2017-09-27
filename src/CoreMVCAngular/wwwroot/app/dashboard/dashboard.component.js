"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../services/index");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var index_2 = require("../modalComponent/index");
//import { DialogService } from "ng2-bootstrap-modal";
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, modalService) {
        this.dashboardService = dashboardService;
        this.modalService = modalService;
        this.model = { dashboardList: [] };
        this.getDashboardItems();
    }
    DashboardComponent.prototype.updateDashboardList = function (dashboardList) {
        this.model.dashboardList = dashboardList;
    };
    /*
    showConfirm() {
        let disposable = this.dialogService.addDialog(ModalComponent, {
            title: 'Confirm title',
            message: 'Confirm message'
        })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    alert('accepted');
                }
                else {
                    alert('declined');
                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }*/
    DashboardComponent.prototype.getDashboardItems = function () {
        //this.modalBs.open();
        debugger;
        var modalRef = this.modalService.open(index_2.NgbdModalContent);
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.data = {
            foo: 'bar',
            name: 'World'
        };
        //this.dashboardService.getAll(this.updateDashboardList.bind(this));
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-comp',
        //moduleId: module.id,
        templateUrl: 'app/dashboard/dashboard.html',
        encapsulation: core_1.ViewEncapsulation.Native,
        styleUrls: ['../../lib/bootstrap/dist/css/bootstrap.min.css', '../../lib/componentStyles/dashboard.css'],
    }),
    __metadata("design:paramtypes", [index_1.DashboardService, ng_bootstrap_1.NgbModal])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
