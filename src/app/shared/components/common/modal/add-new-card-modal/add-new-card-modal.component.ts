import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-add-new-card-modal',
    imports: [],
    templateUrl: './add-new-card-modal.component.html',
    styleUrls: ['./add-new-card-modal.component.scss']
})
export class AddNewCardModalComponent {

  constructor(public modal: NgbModal){}
  
}
