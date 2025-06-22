import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-user-password-modal',
    imports: [],
    templateUrl: './edit-user-password-modal.component.html',
    styleUrls: ['./edit-user-password-modal.component.scss']
})

export class EditUserPasswordModalComponent {

  constructor(public modal: NgbModal) {}
  
}
