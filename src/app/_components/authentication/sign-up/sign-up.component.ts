import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {UserRegistrationRequest} from "../../../_models/UserRegistrationRequest";
import {AuthService} from "../../../_services/auth.service";

@Component({
    selector: 'app-sign-up',
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, NgIf, FormsModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

    registrationRequest: UserRegistrationRequest = {};
    errorMessage: string | null = null;
    successMessage: string | null = null;

    constructor(private authService: AuthService, private router: Router) {
    } // Inject Router

    onRegisterSubmit(): void {
        this.errorMessage = null;
        this.successMessage = null;

        if (!this.registrationRequest.name || !this.registrationRequest.email || !this.registrationRequest.password) {
            this.errorMessage = 'Please fill in all required fields (Name, Email, Password).';
            return;
        }

        this.authService.register(this.registrationRequest).subscribe({
            next: (response) => {
                if (response.errorText) {
                    this.errorMessage = response.errorText;
                } else {
                    this.successMessage = 'Registration successful! You can now log in.';
                    this.registrationRequest = {}; // Clear the form
                    this.router.navigate(['/login']); // Navigate to login page on successful registration
                }
            },
            error: (error) => {
                if (error.status === 409) {
                    this.errorMessage = 'Email already registered. Please use a different email or log in.';
                } else if (error.error && error.error.errorText) {
                    this.errorMessage = error.error.errorText;
                } else {
                    this.errorMessage = 'An unexpected error occurred. Please try again.';
                }
                console.error('Registration error:', error);
            }
        });
    }
}
