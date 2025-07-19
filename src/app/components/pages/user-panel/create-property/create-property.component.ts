import { Component, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormArray,
    Validators,
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Shared UI and Services
import { BreadcrumbComponent } from '../../../../shared/components/ui/breadcrumb/breadcrumb.component';
import { UserInfoComponent } from '../widgets/user-info/user-info.component';
import { UserPanelSideMenuComponent } from '../widgets/user-panel-side-menu/user-panel-side-menu.component';
import {PropertyService} from "../../../../shared/services/property.service";
import {PropertyCategory, PropertyStatus, PropertyType} from "../../../../shared/models/property.enum";

@Component({
    selector: 'app-create-property',
    standalone: true,
    templateUrl: './create-property.component.html',
    styleUrls: ['./create-property.component.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BreadcrumbComponent,
        UserInfoComponent,
        UserPanelSideMenuComponent,
    ],
})
export class CreatePropertyComponent implements OnInit {
    private fb = inject(FormBuilder);
    private propertyService = inject(PropertyService);
    private router = inject(Router);

    // --- Component State ---
    propertyForm!: FormGroup;
    isLoading = false;
    errorMessage: string | null = null;
    successMessage: string | null = null;

    // --- Data for Template ---
    propertyTypes = Object.values(PropertyType);
    propertyCategories = Object.values(PropertyCategory);
    propertyStatuses = Object.values(PropertyStatus);
    availableAmenities = [
        'Swimming Pool', 'WiFi', 'Gym', 'Air Conditioning', 'Parking', 'Security Cameras', 'Pet Friendly'
    ];

    // --- Template Properties ---
    public bgImage = 'assets/images/inner-background.jpg';
    public title = 'Dashboard';
    public parent = 'Home';
    public child = 'Create Property';

    ngOnInit(): void {
        this.propertyForm = this.fb.group({
            // --- Basic Information ---
            mainTitle: ['', [Validators.required]],
            description: ['', [Validators.required, Validators.minLength(50)]],
            type: [PropertyType.SALE, [Validators.required]],
            category: [PropertyCategory.HOUSE, [Validators.required]],
            status: [PropertyStatus.AVAILABLE, [Validators.required]],
            price: ['', [Validators.required, Validators.min(1)]],
            area: ['', [Validators.required, Validators.min(1)]],
            keywords: [''],

            // --- Location (Nested Group) ---
            location: this.fb.group({
                address: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
                zipCode: ['', Validators.required],
                latitude: [''],
                longitude: [''],
            }),

            // --- Property Details & Accommodation ---
            bedrooms: [1, [Validators.required, Validators.min(0)]],
            bathrooms: [1, [Validators.required, Validators.min(0)]],
            parkingSpots: [0, [Validators.required, Validators.min(0)]],
            maxAdultsAccommodation: [1, [Validators.min(1)]],
            maxChildrenAccommodation: [0, [Validators.min(0)]],

            // --- Contact ---
            contactPhone: ['', [Validators.pattern('^[+]?[0-9\\s()-]*$')]],
            contactEmail: ['', [Validators.email]],
            website: [''],

            // --- Amenities (FormArray of strings) ---
            amenities: this.fb.array([]),

            // --- Dynamic Sections (FormArrays of objects) ---
            enableAccordionWidget: [false],
            accordionItems: this.fb.array([]),
            nearbyPlaces: this.fb.array([]),

            // --- Feature Toggles ---
            showSimilarProperties: [false],
            showPriceChangeDynamics: [false],
            showGoogleMaps: [true],
        });
    }

    // --- Getters for easier template access ---
    get f() { return this.propertyForm.controls; }
    get locationGroup() { return this.propertyForm.get('location') as FormGroup; }
    get accordionItems() { return this.propertyForm.get('accordionItems') as FormArray; }
    get nearbyPlaces() { return this.propertyForm.get('nearbyPlaces') as FormArray; }
    get amenities() { return this.propertyForm.get('amenities') as FormArray; }

    // --- Dynamic FormArray Methods ---
    onAmenityChange(event: any): void {
        if (event.target.checked) {
            this.amenities.push(this.fb.control(event.target.value));
        } else {
            const index = this.amenities.controls.findIndex(x => x.value === event.target.value);
            this.amenities.removeAt(index);
        }
    }

    addAccordionItem(): void {
        this.accordionItems.push(this.fb.group({ title: ['', Validators.required], details: ['', Validators.required] }));
    }

    removeAccordionItem(index: number): void { this.accordionItems.removeAt(index); }

    addNearbyPlace(): void {
        this.nearbyPlaces.push(this.fb.group({ placeType: ['', Validators.required], name: ['', Validators.required], distance: ['', Validators.required] }));
    }

    removeNearbyPlace(index: number): void { this.nearbyPlaces.removeAt(index); }

    // --- Form Submission ---
    onSubmit(): void {
        this.propertyForm.markAllAsTouched();
        if (this.propertyForm.invalid) {
            this.errorMessage = 'Please fill out all required fields correctly.';
            window.scrollTo(0, 0);
            return;
        }
        this.isLoading = true;
        this.errorMessage = null;
        this.successMessage = null;

        this.propertyService.createProperty(this.propertyForm.value).subscribe({
            next: (res) => {
                if (res.success) {
                    this.successMessage = `Property "${res.data.mainTitle}" created successfully! Redirecting...`;
                    this.propertyForm.reset();
                    setTimeout(() => this.router.navigate(['/page/user/my-listing']), 2000);
                } else {
                    this.errorMessage = res.error?.message || 'An unknown error occurred.';
                }
            },
            error: (err) => {
                this.errorMessage = err.error?.error?.message || 'A server error occurred.';
                this.isLoading = false;
                window.scrollTo(0, 0);
            },
            complete: () => { this.isLoading = false; }
        });
    }
}
