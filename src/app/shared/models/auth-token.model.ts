/**
 * Represents the authentication token pair returned upon successful login
 * or token refresh.
 */
export interface AuthToken {
    accessToken: string;
    refreshToken: string;
}
