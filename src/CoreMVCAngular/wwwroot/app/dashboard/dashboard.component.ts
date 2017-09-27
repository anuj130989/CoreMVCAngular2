import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../services/index';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modalComponent/index';
//import { DialogService } from "ng2-bootstrap-modal";

@Component({
    selector: 'dashboard-comp',
    //moduleId: module.id,
    templateUrl: 'app/dashboard/dashboard.html',
    encapsulation: ViewEncapsulation.Native,
    styleUrls: ['../../lib/bootstrap/dist/css/bootstrap.min.css', '../../lib/componentStyles/dashboard.css'],
})
export class DashboardComponent {
    private model: any = { dashboardList: [] };
    constructor(private dashboardService: DashboardService, private modalService: NgbModal ) {
        this.getDashboardItems();
    }

    updateDashboardList(dashboardList: any) {
        this.model.dashboardList = dashboardList;
    }

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

    getDashboardItems() {
        //this.modalBs.open();
        debugger;
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.data = {
            foo: 'bar',
            name: 'World'
        }
        //this.dashboardService.getAll(this.updateDashboardList.bind(this));
    }
}