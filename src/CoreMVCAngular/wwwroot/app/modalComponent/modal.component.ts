import { Component, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: 'app/modalComponent/modalComponent.html'
})
export class NgbdModalContent {
    @Input() name: any;
    @Input() modalTitle: string;

    constructor(public activeModal: NgbActiveModal) { }
}

