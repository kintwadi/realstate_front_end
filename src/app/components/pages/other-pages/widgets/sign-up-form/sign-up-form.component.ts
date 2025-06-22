import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

import {FeatherIconsComponent} from '../../../../../shared/components/ui/feather-icons/feather-icons.component';
import {AuthService} from "../../../../../shared/services/auth.service";

@Component({
    selector: 'app-sign-up-form',
    standalone: true,
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss'],
    imports: [FeatherIconsComponent, CommonModule, RouterModule, ReactiveFormsModule]
})
export class SignUpFormComponent {

    // --- Dependency Injection ---
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    // --- Component State ---
    public signUpForm: FormGroup;
    public isLoading = false;
    public errorMessage: string | null = null;
    public successMessage: string | null = null;
    public isShowPassword = false;

    constructor() {
        this.signUpForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            phone: ['', [Validators.pattern('^[+]?[0-9\\s()-]*$')]]
        });
    }

    get f() {
        return this.signUpForm.controls;
    }

    public get inputType(): string {
        return this.isShowPassword ? 'text' : 'password';
    }

    public togglePasswordVisibility(): void {
        this.isShowPassword = !this.isShowPassword;
    }

    // --- Form Submission Logic ---
    public onSubmit(): void {
        this.signUpForm.markAllAsTouched();

        if (this.signUpForm.invalid) {
            return;
        }

        // Reset state before submission
        this.isLoading = true;
        this.errorMessage = null;
        this.successMessage = null;

        this.authService.register(this.signUpForm.value).subscribe({
            next: (response) => {
                if (response.success) {
                    this.successMessage = "Registration successful! Redirecting to login...";
                    setTimeout(() => {
                        this.router.navigate(['/page/other-pages/log-in']);
                    }, 2000);
                } else {
                    this.errorMessage = response.error?.message || 'An unknown error occurred.';
                }
            this.isLoading = false;
            },
            error: (err) => {
                if (err.error?.error?.message) {
                    this.errorMessage = err.error.error.message;
                } else {
                    this.errorMessage = 'A server error occurred. Please try again later.';
                }
                console.error('Registration failed:', err);
                this.isLoading = false;
            },
            complete: () => {
                this.isLoading = false;
            }
        });
    }
}
