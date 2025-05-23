// auth.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_ENDPOINTS} from "../_helpers/api.constants";
import {UserRegistrationRequest} from "../_models/UserRegistrationRequest";
import {StandardResponse} from "../_models/StandardResponse";
import {UserLoginRequest} from "../_models/user-login";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    register(registrationRequest: UserRegistrationRequest): Observable<StandardResponse<void>> {
        return this.http.post<StandardResponse<void>>(API_ENDPOINTS.authSignUp, registrationRequest);
    }

    login(loginRequest: UserLoginRequest): Observable<StandardResponse<string>> {
        return this.http.post<StandardResponse<string>>(API_ENDPOINTS.authSignIn, loginRequest);
    }
}
