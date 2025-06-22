import { Injectable, inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { API_ENDPOINTS } from '../constants/api-endpoints';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private authService = inject(AuthService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getAccessToken();

        if (token) {
            req = this.addTokenHeader(req, token);
        }

        return next.handle(req).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse && error.status === 401 && req.url !== API_ENDPOINTS.AUTH.LOGIN) {
                    return this.handle401Error(req, next);
                }
                return throwError(() => error);
            })
        );
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.authService.isTokenRefreshing) {
            this.authService.isTokenRefreshing = true;
            this.authService.refreshTokenSub.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((tokenResponse: any) => {
                    this.authService.isTokenRefreshing = false;
                    const newAccessToken = this.authService.getAccessToken();
                    this.authService.refreshTokenSub.next(newAccessToken);
                    return next.handle(this.addTokenHeader(request, newAccessToken!));
                }),
                catchError((err) => {
                    this.authService.isTokenRefreshing = false;
                    this.authService.logout(); // Logout if refresh fails
                    return throwError(() => err);
                })
            );
        }

        // If token is already refreshing, wait for it to complete
        return this.authService.refreshTokenSub.pipe(
            filter(token => token != null),
            take(1),
            switchMap(jwt => next.handle(this.addTokenHeader(request, jwt)))
        );
    }

    private addTokenHeader(request: HttpRequest<any>, token: string) {
        return request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
    }
}
