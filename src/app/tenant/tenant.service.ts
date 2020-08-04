import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TenantService {

    tenantUrl: string;

    constructor(private http: HttpClient) {
        this.tenantUrl = `${environment.apiUrl}/companies`;
    }

    pesquisar(): Promise<any> {
        const headers = new HttpHeaders().append('Authorization', 'Basic OlRFU1RfWkdSaVpETTFPVFpsWmpaaE1XSTNaVFV6WkRReU16UTJNalV6TkRVMlpEYzJZbU01T0RsaVpqTTNOMkkxTkRJMU9ETTFOV0ZqTXpaa01UUTVNekkwTkdaa09URm1aREZsT0RCaU5XWTJaRGRtWVRRek5UWmpaakkxTkRJek1EZGxNMlExTXpGbVpXVmpabUkxWlRFMk1tTmtNemN5Wm1RME5HVmpaalF6TkRFPQ==');
        return this.http.get(`${this.tenantUrl}`, { headers })
          .toPromise()
          .then(response =>
              response
          );
    }
}
