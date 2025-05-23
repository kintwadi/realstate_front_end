export interface StandardResponse<T> {
    errorText?: string;
    errorCode?: string;
    data?: T;
}
