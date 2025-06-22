/**
 * Represents the structured error object returned by the backend API.
 * This maps to the backend's ErrorCode class.
 */
export interface ApiError {
    code: number;
    message: string;
    status: string; // e.g., 'UNAUTHORIZED', 'NOT_FOUND'
    timestamp: string;
}
