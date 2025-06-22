import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-advance-filter-mortgage',
    imports: [ReactiveFormsModule],
    templateUrl: './advance-filter-mortgage.component.html',
    styleUrls: ['./advance-filter-mortgage.component.scss']
})
export class AdvanceFilterMortgageComponent {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  myForm = new FormGroup({
    loan_amount: new FormControl(''),
    down_payment: new FormControl(''),
    interest: new FormControl(''),
    years: new FormControl(''),
  });

  onSubmit(form: FormGroup) {

  }
}
