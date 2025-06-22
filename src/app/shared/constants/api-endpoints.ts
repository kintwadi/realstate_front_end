import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${apiUrl}api/auth/login`,
        REGISTER: `${apiUrl}api/auth/register`,
        REFRESH_TOKEN: `${apiUrl}api/auth/refresh-token`,
        LOGOUT: `${apiUrl}api/auth/logout`
    },
    PROPERTIES: {
        GET_ALL: `${apiUrl}api/properties`,
        CREATE: `${apiUrl}api/properties`,
        GET_BY_ID: (id: number) => `${apiUrl}api/properties/${id}`,
        UPDATE: (id: number) => `${apiUrl}api/properties/${id}`,
        DELETE: (id: number) => `${apiUrl}api/properties/${id}`,
    }
};
