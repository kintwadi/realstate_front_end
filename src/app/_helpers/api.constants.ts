import {environment} from "../../environments/environment";

export const API_ENDPOINTS = {
    authSignIn: environment.baseUrl + '/api/auth/login',
    authSignUp: environment.baseUrl + '/api/auth/register',
};
