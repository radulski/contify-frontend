import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class LogoutService {

    tokensRenokeUrl: string;

    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) {
        this.tokensRenokeUrl = `${environment.apiUrl}/companies/123456/tokens/revoke`;
    }

    logout(): Promise<any> {
        const headers = new HttpHeaders()
        .append('Authorization', 'Basic OlRFU1RfWkdSaVpETTFPVFpsWmpaaE1XSTNaVFV6WkRReU16UTJNalV6TkRVMlpEYzJZbU01T0RsaVpqTTNOMkkxTkRJMU9ETTFOV0ZqTXpaa01UUTVNekkwTkdaa09URm1aREZsT0RCaU5XWTJaRGRtWVRRek5UWmpaakkxTkRJek1EZGxNMlExTXpGbVpXVmpabUkxWlRFMk1tTmtNemN5Wm1RME5HVmpaalF6TkRFPQ==');
        headers.append('Content-Type', 'application/json');

        return this.http.delete(`${this.tokensRenokeUrl}`, { headers })
            .toPromise()
            .then(() => {
                this.auth.clearAccessToken();
            });
    }
}
