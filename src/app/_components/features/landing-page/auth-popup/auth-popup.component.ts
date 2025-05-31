import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-auth-popup',
    templateUrl: './auth-popup.component.html',
    styleUrls: ['./auth-popup.component.scss']
})
export class AuthPopupComponent implements AfterViewInit {
    @Input() isVisible: boolean = false;
    @Output() onClose = new EventEmitter<void>();

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        // Initialize tab functionality (scripts.js for .tabs-menu)
        // Initialize view-pass JS
        // Handle .modal-open, .close-reg-form, .reg-overlay clicks (scripts.js)
        // The original script likely toggles 'vis_mr' on .main-register-wrap
        // and display on .main-register-container and .reg-overlay
    }

    closePopup(): void {
        this.isVisible = false;
        this.onClose.emit();
    }
}
