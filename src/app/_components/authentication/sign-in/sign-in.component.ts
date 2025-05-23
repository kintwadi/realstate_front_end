import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {UserLoginRequest} from "../../../_models/user-login";
import {AuthService} from "../../../_services/auth.service";

@Component({
    selector: 'app-sign-in',
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, NgIf, FormsModule, RouterLink],
    templateUrl: './sign-in.component.html',
    standalone: true,
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
    loginRequest: UserLoginRequest = {};
    errorMessage: string | null = null;
    successMessage: string | null = null;

    constructor(private authService: AuthService, private router: Router) {
    } // Inject Router

    onLoginSubmit(): void {
        this.errorMessage = null;
        this.successMessage = null;

        if (!this.loginRequest.email || !this.loginRequest.password) {
            this.errorMessage = 'Please enter both email and password.';
            return;
        }

        this.authService.login(this.loginRequest).subscribe({
            next: (response) => {
                if (response.errorText) {
                    this.errorMessage = response.errorText;
                } else {
                    this.successMessage = response.data || 'Login successful!';
                    this.loginRequest = {}; // Clear the form
                    // TODO: In a real app, you would store a JWT token here and redirect to a dashboard.
                    console.log('Login successful:', response.data);
                    this.router.navigate(['/dashboard']); // Example: Navigate to a dashboard
                }
            },
            error: (error) => {
                // Handle HTTP errors (e.g., 401 Unauthorized)
                if (error.status === 401) {
                    this.errorMessage = 'Invalid email or password. Please try again.';
                } else if (error.error && error.error.errorText) {
                    this.errorMessage = error.error.errorText;
                } else {
                    this.errorMessage = 'An unexpected error occurred during login. Please try again.';
                }
                console.error('Login error:', error);
            }
        });
    }
}
