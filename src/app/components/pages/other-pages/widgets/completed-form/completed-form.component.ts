import { Component, EventEmitter, Input, Output } from '@angular/core';
import { accountInformation, addressInformation } from '../../../../../shared/interface/property';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-completed-form',
    imports: [],
    templateUrl: './completed-form.component.html',
    styleUrls: ['./completed-form.component.scss']
})
export class CompletedFormComponent {

  @Input() accountData: accountInformation;
  @Input() addressData: addressInformation;

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 3;

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  submit() {
    Swal.fire({
      title: 'Are you sure you want to submit the form?',
      text: 'please confirm the details',
      icon: 'success',
      confirmButtonText: 'submit',
      confirmButtonColor: '#e64942',
      showCancelButton: true,
      cancelButtonColor: '#efefef',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }
}
