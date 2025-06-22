import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        // Optional: Check for roles if a route requires a specific role
        const requiredRoles = route.data['roles'] as Array<string>;
        if (requiredRoles) {
            const userRole = authService.getUserRole();
            if (!userRole || !requiredRoles.includes(userRole)) {
                // Redirect to an 'unauthorized' page or back to dashboard
                router.navigate(['/dashboard']);
                return false;
            }
        }
        return true;
    }

    // Redirect to the login page if not authenticated
    router.navigate(['/auth/login']);
    return false;
};
