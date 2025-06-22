import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-user-email-modal',
    imports: [],
    templateUrl: './edit-user-email-modal.component.html',
    styleUrls: ['./edit-user-email-modal.component.scss']
})
export class EditUserEmailModalComponent {

  constructor(public modal:NgbModal){}
  
}
