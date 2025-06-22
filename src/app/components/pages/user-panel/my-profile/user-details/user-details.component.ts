import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserDetailsModalComponent } from '../../../../../shared/components/common/modal/edit-user-details-modal/edit-user-details-modal.component';
import { EditUserEmailModalComponent } from '../../../../../shared/components/common/modal/edit-user-email-modal/edit-user-email-modal.component';
import { EditUserPasswordModalComponent } from '../../../../../shared/components/common/modal/edit-user-password-modal/edit-user-password-modal.component';
import { FeatherIconsComponent } from '../../../../../shared/components/ui/feather-icons/feather-icons.component';

@Component({
    selector: 'app-user-details',
    imports: [FeatherIconsComponent],
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  constructor(private modal: NgbModal) {}

  editDetails() {
    this.modal.open(EditUserDetailsModalComponent, { size: 'lg', centered: true})
  }
  
  editEmail() {
    this.modal.open(EditUserEmailModalComponent, {
      centered: true,
    });
  }

  editPassword() {
    this.modal.open(EditUserPasswordModalComponent, {
      centered: true,
    });
  }
}
