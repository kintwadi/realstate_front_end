import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NgForm} from "@angular/forms";
import {MainFooterComponent} from "../landing-page/main-footer/main-footer.component";
import {RouterLink} from "@angular/router";

declare var $: any; // If you're using jQuery for plugins like chosen-select
declare var initChosenSelect: any; // Example if you have such a function
declare var initMapForAddListing: any; // Example for your map-add.js
declare var initDbScripts: any; // For db-scripts.js interactions
@Component({
  selector: 'app-add-properties',
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
  templateUrl: './add-properties.component.html',
  styleUrl: './add-properties.component.scss'
})
export class AddPropertiesComponent implements AfterViewInit{
    constructor(private el: ElementRef) { }
    ngOnInit(): void {
        // Initialize form logic if using Reactive Forms
    }

    ngAfterViewInit(): void {

        // Initialize jQuery plugins after the view is rendered
        // This is where you would call functions that were in your static page's script tags
        // Example for chosen-select:
        if (typeof $ !== 'undefined' && typeof ($ as any).fn.chosen === 'function') {
            $(this.el.nativeElement).find('.chosen-select').chosen({
                no_results_text: "Oops, nothing found!",
                // Add other options as per your plugins.js or scripts.js
            });
        }

        // Example for price-range slider (if it's a jQuery plugin):
        if (typeof $ !== 'undefined' && typeof ($ as any).fn.ionRangeSlider === 'function') {
            $(this.el.nativeElement).find('.price-range').each(function () {
                // Extract data attributes and initialize
                // This part needs to replicate the logic from plugins.js for .price-range
            });
        }

        // Tooltips:
        if (typeof $ !== 'undefined' && typeof ($ as any).fn.tippy === 'function') {
            $(this.el.nativeElement).find('.tolt').each(function () {
                // Initialize tippy.js tooltips as per plugins.js
            });
        }

        // Map initialization (from map-add.js)
        // You'll need to ensure the map script (map-add.js) is loaded and
        // its initialization function can target the #singleMap div within this component.
        if (typeof initMapForAddListing === 'function') {
            const mapElement = this.el.nativeElement.querySelector('#singleMap.drag-map');
            if(mapElement) {
                initMapForAddListing(mapElement);
            }
        }

        // Other initializations from db-scripts.js if they apply to this page
        if (typeof initDbScripts === 'function') {
            // Call specific functions from db-scripts.js that are relevant here
        }

        // File upload zone interactions (fuzone) might also be from scripts.js
    }

    onFileSelected(event: any): void {
        const files = event.target.files;
        if (files && files.length > 0) {
            console.log("Main files selected:", files);
            // Add your file handling logic
        }
    }

    onBgFileSelected(event: any): void {
        const files = event.target.files;
        if (files && files.length > 0) {
            console.log("Background files selected:", files);
            // Add your file handling logic
        }
    }

    onPlansSelected(event: any): void {
        const files = event.target.files;
        if (files && files.length > 0) {
            console.log("Plans/Brochure files selected:", files);
            // Add your file handling logic
        }
    }

    onSubmit(form?: NgForm) { // For template-driven, or remove 'form' if reactive
        console.log('Submitting Add Listing Form');
        if (form) { // If template-driven
            if (!form.valid) {
                console.error("Form is invalid");
                return;
            }
            console.log(form.value);
            // Process form.value
        }
        // If reactive, you'd use this.yourFormGroup.value
    }
}
