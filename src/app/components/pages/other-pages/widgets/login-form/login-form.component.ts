import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

import {FeatherIconsComponent} from '../../../../../shared/components/ui/feather-icons/feather-icons.component';
import {AuthService} from "../../../../../shared/services/auth.service";

@Component({
    selector: 'app-login-form',
    // Add standalone: true if this is a standalone component
    standalone: true,
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    // Import ReactiveFormsModule for form directives
    imports: [FeatherIconsComponent, CommonModule, RouterModule, ReactiveFormsModule]
})
export class LoginFormComponent {

    // --- Dependency Injection ---
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);

    // --- Component State ---
    public loginForm: FormGroup;
    public isLoading = false;
    public errorMessage: string | null = null;
    public isShowPassword = false;

    constructor() {
        this.loginForm = this.fb.group({
            // Define form controls with validators
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // --- Template Helpers ---

    // Getter for easy access to form controls in the template
    get f() {
        return this.loginForm.controls;
    }

    public get inputType(): string {
        return this.isShowPassword ? 'text' : 'password';
    }

    public togglePasswordVisibility(): void {
        this.isShowPassword = !this.isShowPassword;
    }

    // --- Form Submission Logic ---

    public onSubmit(): void {
        // Mark all fields as touched to trigger validation messages
        this.loginForm.markAllAsTouched();

        if (this.loginForm.invalid) {
            return; // Stop if the form is invalid
        }

        // Reset state and start loading
        this.isLoading = true;
        this.errorMessage = null;

        this.authService.login(this.loginForm.value).subscribe({
            next: (response) => {
                // Success! Navigation is handled by the AuthService.
                // You can add a success toast notification here if you like.
                console.log('Login successful');
                this.isLoading = false;
            },
            error: (err) => {
                this.isLoading = false;
                // Handle backend errors
                if (err.error?.error?.message) {
                    // Use the structured error message from your backend's StandardResponse
                    this.errorMessage = err.error.error.message;
                } else {
                    // Fallback for unexpected errors
                    this.errorMessage = 'An unexpected error occurred. Please try again.';
                }
                console.error('Login failed:', err);
            },
            complete: () => {
                // Stop loading spinner
                this.isLoading = false;
            }
        });
    }
}
