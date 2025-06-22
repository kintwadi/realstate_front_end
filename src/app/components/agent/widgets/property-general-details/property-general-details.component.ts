import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  agency,
  baths,
  beds,
  category,
  propertyStatus,
  propertyType,
  rooms,
  location,
} from '../../../../shared/data/advance-filter';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-property-general-details',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './property-general-details.component.html',
    styleUrls: ['./property-general-details.component.scss']
})

export class PropertyGeneralDetailsComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 1;
  public validate: boolean = false;

  public propertyStatus = propertyStatus;
  public propertyType = propertyType;
  public location = location;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
  public agencys = agency;
  public category = category;


  public myForm = new FormGroup({
    property_type: new FormControl('', Validators.required),
    property_status: new FormControl('', Validators.required),
    property_price: new FormControl('', Validators.required),
    room: new FormControl('', Validators.required),
    bed: new FormControl('', Validators.required),
    bath: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    agency: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  next(myForm: FormGroup) {
    if (this.myForm.invalid) {
      this.validate = true;
    } else {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get property_type() {
    return this.myForm.get('property_type');
  }

  get property_status() {
    return this.myForm.get('property_status');
  }

  get property_price() {
    return this.myForm.get('property_price');
  }

  get room() {
    return this.myForm.get('room');
  }

  get bed() {
    return this.myForm.get('bed');
  }

  get bath() {
    return this.myForm.get('bath');
  }

  get area() {
    return this.myForm.get('area');
  }

  get price() {
    return this.myForm.get('price');
  }

  get agency() {
    return this.myForm.get('agency');
  }

  get description() {
    return this.myForm.get('description');
  }
}
