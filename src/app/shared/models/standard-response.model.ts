import { ApiError } from './api-error.model';

/**
 * Represents the standardized response structure for all backend API calls.
 * @template T The type of the data payload for successful responses.
 */
export interface StandardResponse<T> {
    success: boolean;
    data: T;
    message: string;
    error: ApiError | null;
    timestamp: string;
}
