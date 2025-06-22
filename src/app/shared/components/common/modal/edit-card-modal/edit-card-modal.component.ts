import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-card-modal',
    imports: [],
    templateUrl: './edit-card-modal.component.html',
    styleUrls: ['./edit-card-modal.component.scss']
})
export class EditCardModalComponent {

  constructor(public modal: NgbModal) {}
  
}
