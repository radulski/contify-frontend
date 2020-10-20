import { environment } from './../../environments/environment';
import { Employee } from './../core/model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
// import { Subscription } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    // employeeUrl = 'http://localhost:8888/api/v1/companies?page=1&size=4';
    // employeeUrl = 'http://localhost:8888/api/v1/companies/31867e01-4ca1-405d-8798-f066e589fd1d/employees';

    attachmentUrl = 'http://localhost:8888/api/v1/companies/31867e01-4ca1-405d-8798-f066e589fd1d/attachment';
    // employeeUrl = 'https://cazrwapp01.azurewebsites.net/v1/companies/a370066d-336d-4360-b60e-e03f1bbd91bd/employees';

    employeeUrl: string;
    tenantId: string;

    constructor(private http: HttpClient) {
        this.tenantId = '0914a1a8-5d8e-473f-b76a-757349d60d4e'; // localStorage.getItem('tenantId');
        this.employeeUrl = `${environment.apiUrl}/companies/${this.tenantId}/employees`;
        // this.employeeUrl = 'http://localhost:8080/employees'; // `${environment.apiUrl}/employees`;
    }

    pesquisar(): Promise<any> {
        const headers = new HttpHeaders().append('Authorization', 'Basic OlRFU1RfWkdSaVpETTFPVFpsWmpaaE1XSTNaVFV6WkRReU16UTJNalV6TkRVMlpEYzJZbU01T0RsaVpqTTNOMkkxTkRJMU9ETTFOV0ZqTXpaa01UUTVNekkwTkdaa09URm1aREZsT0RCaU5XWTJaRGRtWVRRek5UWmpaakkxTkRJek1EZGxNMlExTXpGbVpXVmpabUkxWlRFMk1tTmtNemN5Wm1RME5HVmpaalF6TkRFPQ==');

        return this.http.get<any>(`${this.employeeUrl}`, { headers })
          .toPromise()
          .then(response => {
            const employees = response.content;

            const resultado = {
                employees,
                total: response.totalElements
            };

            return resultado;
        });
    }

    adicionar(employee: Employee): Promise<Employee> {
        const headers = new HttpHeaders().append('Authorization', 'Basic OlRFU1RfWkdSaVpETTFPVFpsWmpaaE1XSTNaVFV6WkRReU16UTJNalV6TkRVMlpEYzJZbU01T0RsaVpqTTNOMkkxTkRJMU9ETTFOV0ZqTXpaa01UUTVNekkwTkdaa09URm1aREZsT0RCaU5XWTJaRGRtWVRRek5UWmpaakkxTkRJek1EZGxNMlExTXpGbVpXVmpabUkxWlRFMk1tTmtNemN5Wm1RME5HVmpaalF6TkRFPQ==');
        headers.append('Content-Type', 'application/json');

        return this.http.post<Employee>(
            this.employeeUrl, employee, {headers})
        .toPromise();
    }

    inputFile(event) {
        const headers = new HttpHeaders().append('Authorization', 'Basic OlRFU1RfWkdSaVpETTFPVFpsWmpaaE1XSTNaVFV6WkRReU16UTJNalV6TkRVMlpEYzJZbU01T0RsaVpqTTNOMkkxTkRJMU9ETTFOV0ZqTXpaa01UUTVNekkwTkdaa09URm1aREZsT0RCaU5XWTJaRGRtWVRRek5UWmpaakkxTkRJek1EZGxNMlExTXpGbVpXVmpabUkxWlRFMk1tTmtNemN5Wm1RME5HVmpaalF6TkRFPQ==');
        headers.append('Content-Type', 'application/json');

        if (event.target.files && event.target.files[0]) {
            const foto = event.target.files[0];
            const formData = new FormData();
            formData.append('arquivo', foto);

            return this.http.post(this.attachmentUrl, formData, {headers})
                .subscribe(resposta => console.log('upload ok'));
        }
    }
}
