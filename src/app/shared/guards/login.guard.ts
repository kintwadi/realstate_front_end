import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        // If user is already logged in, redirect them to their profile page
        router.navigate(['/page/user/my-profile']);
        return false;
    }
    return true;
};
