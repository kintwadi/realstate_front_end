import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import {API_ENDPOINTS} from "../constants/api-endpoints";
import { AuthToken } from '../models/auth-token.model';
import { StandardResponse } from '../models/standard-response.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private router = inject(Router);
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    /**
     * Performs the login request.
     * On success, it stores the tokens and navigates to the dashboard.
     */
    login(credentials: any): Observable<StandardResponse<AuthToken>> {
        return this.http.post<StandardResponse<AuthToken>>(API_ENDPOINTS.AUTH.LOGIN, credentials).pipe(
            tap(response => {
                if (response.success && response.data) {
                    this.storeTokens(response.data);
                    this.router.navigate(['/page/user/my-profile']); // or any protected route
                }
            })
        );
    }

    /**
     * Performs the user registration request.
     */
    register(userInfo: any): Observable<StandardResponse<any>> {
        return this.http.post<StandardResponse<any>>(API_ENDPOINTS.AUTH.REGISTER, userInfo);
    }

    /**
     * Clears stored tokens and navigates to the login page.
     */
    logout(): void {
        // Optional: Call a backend logout endpoint to invalidate the refresh token
        // this.http.post(`${this.apiUrl}/logout`, { refreshToken: this.getRefreshToken() }).subscribe();
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/auth/login']);
    }

    /**
     * Checks if a user is authenticated.
     * It verifies the presence and expiration of the access token.
     */
    isAuthenticated(): boolean {
        const token = this.getAccessToken();
        if (!token) {
            return false;
        }
        try {
            const decodedToken: { exp: number } = jwtDecode(token);
            const isExpired = Date.now() >= decodedToken.exp * 1000;
            return !isExpired;
        } catch (error) {
            return false;
        }
    }

    getAccessToken(): string | null {
        return localStorage.getItem('access_token');
    }

    getRefreshToken(): string | null {
        return localStorage.getItem('refresh_token');
    }

    /**
     * Extracts the user's role from the JWT payload.
     */
    getUserRole(): string | null {
        const token = this.getAccessToken();
        if (!token) {
            return null;
        }
        try {
            const decodedToken: { role: string } = jwtDecode(token);
            return decodedToken.role;
        } catch (error) {
            return null;
        }
    }

    private storeTokens(tokens: AuthToken): void {
        localStorage.setItem('access_token', tokens.accessToken);
        localStorage.setItem('refresh_token', tokens.refreshToken);
    }

    // TODO: Implement token refresh logic
    // This method would be called by an interceptor when a 401 error is received.
    refreshToken(): Observable<any> {
        const refreshToken = this.getRefreshToken();
        return this.http.post<StandardResponse<AuthToken>>(API_ENDPOINTS.AUTH.REFRESH_TOKEN, {refreshToken}).pipe(
            tap(response => {
                if (response.success && response.data) {
                    this.storeTokens(response.data);
                }
            })
        );
    }

    get isTokenRefreshing() {
        return this.isRefreshing;
    }

    set isTokenRefreshing(value: boolean) {
        this.isRefreshing = value;
    }

    get refreshTokenSub() {
        return this.refreshTokenSubject;
    }
}
