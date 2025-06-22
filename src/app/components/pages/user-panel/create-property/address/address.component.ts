import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-address',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './address.component.html',
})
export class AddressComponent {
    // Receive the specific nested form group from the parent
    @Input() addressFormGroup!: FormGroup;

    // Getter for easy access to form controls
    get f() { return this.addressFormGroup.controls; }
}
