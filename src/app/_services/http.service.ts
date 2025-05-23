// http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    private generateHeaders(headers?: HttpHeaders): HttpHeaders {
        let defaultHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return headers ? defaultHeaders.append(headers.keys().join(','), headers.get(headers.keys()[0])!) : defaultHeaders;
    }

    request(
        method: string,
        url: string,
        body?: any,
        headers?: HttpHeaders
    ): Observable<any> {
        const requestOptions = {
            headers: this.generateHeaders(headers),
            withCredentials: true // This will send the cookies
        };

        switch (method.toUpperCase()) {
            case 'GET':
                return this.http.get(url, requestOptions);
            case 'POST':
                return this.http.post(url, body, requestOptions);
            case 'PUT':
                return this.http.put(url, body, requestOptions);
            case 'DELETE':
                return this.http.delete(url, requestOptions);
            default:
                throw new Error('Invalid HTTP method');
        }
    }
}
