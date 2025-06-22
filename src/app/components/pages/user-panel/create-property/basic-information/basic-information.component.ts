import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {PropertyCategory, PropertyStatus, PropertyType} from "../../../../../shared/models/property.enum";

@Component({
    selector: 'app-basic-information',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './basic-information.component.html',
})
export class BasicInformationComponent {
    // Receive the form group from the parent component
    @Input() parentForm!: FormGroup;

    // Make enums available to the template
    propertyTypes = Object.values(PropertyType);
    propertyCategories = Object.values(PropertyCategory);
    propertyStatuses = Object.values(PropertyStatus);

    // Getter for easy access to form controls in the template
    get f() { return this.parentForm.controls; }
}
