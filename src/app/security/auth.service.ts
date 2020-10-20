import { UserToken, Employee } from './../core/model';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {

    tenantId: string;

    tokenUrl: string;

    userToken = new UserToken();

    constructor(private http: HttpClient) {
        this.tenantId = '0914a1a8-5d8e-473f-b76a-757349d60d4e'; // localStorage.getItem('tenantId');
        // this.tokenUrl = `${environment.apiUrl}/companies/0914a1a8-5d8e-473f-b76a-757349d60d4e/login/generate_token`;
        this.tokenUrl = `${environment.apiUrl}/companies/0914a1a8-5d8e-473f-b76a-757349d60d4e/login/get_token`;
        this.carregarToken();
    }

    route: ActivatedRouteSnapshot;

    /*
    obterNovoAccessToken(): Promise<void> {
        // this.armazenarToken(this.route.paramMap.get('token'));
        return Promise.resolve(null);
    }
    */

    validateToken(token: string): Promise<any> {
        const headers = new HttpHeaders().append('Authorization', 'Basic OlRFU1RfWkdSaVpETTFPVFpsWmpaaE1XSTNaVFV6WkRReU16UTJNalV6TkRVMlpEYzJZbU01T0RsaVpqTTNOMkkxTkRJMU9ETTFOV0ZqTXpaa01UUTVNekkwTkdaa09URm1aREZsT0RCaU5XWTJaRGRtWVRRek5UWmpaakkxTkRJek1EZGxNMlExTXpGbVpXVmpabUkxWlRFMk1tTmtNemN5Wm1RME5HVmpaalF6TkRFPQ==');
        headers.append('Content-Type', 'application/json');

        return this.http.get(`${this.tokenUrl}`, { headers })
            .toPromise();

        // return true;
    }

    isAccessTokenInvalido(): any {
        const token = localStorage.getItem('token');
        // return !token; // || this.jwtHelper.isTokenExpired(token);
        return true;
    }

    armazenarToken(token: string): any {
        localStorage.setItem('token', token);
    }

    clearAccessToken(): any {
        localStorage.removeItem('token');
    }

    private carregarToken(): any {
        const token = localStorage.getItem('token');

        if (token) {
            this.armazenarToken(token);
        }
    }
}
