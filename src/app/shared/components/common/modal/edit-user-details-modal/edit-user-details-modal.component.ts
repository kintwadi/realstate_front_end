import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-user-details-modal',
    imports: [],
    templateUrl: './edit-user-details-modal.component.html',
    styleUrls: ['./edit-user-details-modal.component.scss']
})
export class EditUserDetailsModalComponent {

  constructor(public modal: NgbModal){}
  
}
