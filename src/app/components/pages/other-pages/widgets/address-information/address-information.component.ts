import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addressInformation } from '../../../../../shared/interface/property';
import { FeatherIconsComponent } from '../../../../../shared/components/ui/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-address-information',
    imports: [FeatherIconsComponent, CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './address-information.component.html',
    styleUrls: ['./address-information.component.scss']
})
export class AddressInformationComponent {

  @Output() activeSteps = new EventEmitter<number>();
  @Output() addressInformation = new EventEmitter<addressInformation>();

  public activeStep: number = 2;
  public validate: boolean = false;

  myForm = new FormGroup({
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pin_code: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{6}$'),
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
  });

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
  next(myForm: any) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
    this.addressInformation.emit(myForm.value);
  }

  get address() {
    return this.myForm.get('address');
  }

  get city() {
    return this.myForm.get('city');
  }

  get state() {
    return this.myForm.get('state');
  }

  get country() {
    return this.myForm.get('country');
  }

  get pin_code() {
    return this.myForm.get('pin_code');
  }
}
