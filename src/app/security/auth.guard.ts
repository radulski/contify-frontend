import { EmployeeService } from './../employee/employee.service';
import { UserToken, Employee } from './../core/model';
import { AuthService } from './auth.service';
import { TenantService } from './../tenant/tenant.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    userToken = new UserToken();
    employee = new Employee();

    private clients: TenantService[];

    constructor(
        private auth: AuthService,
        private employeeService: EmployeeService,
        private router: Router
        // private tenantService: TenantService,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree {
        /*
        const tokenTest = '220546';

        if (tokenTest !== '220546') {
            this.router.navigate(['/nao-autorizado']);
            return false;
        }

        return true;
        */
        const tokenTest = '220546';

        const aValue: string = localStorage.getItem('token');

        /*
        if (aValue === 'null') {
            console.log('um');
        } else {
            console.log('dois');
        }
        */

        // this.employeeService.adicionar(this.employee);

        // this.auth.validateToken(this.userToken);

        // this.auth.adicionar(this.employee);

        // this.auth.pesquisar();

        // this.auth.pesquisar();

        /*
        if (aValue === null) {
            // verificar se existe token na url
            const tokenUrl: string = route.paramMap.get('token');

            if (this.auth.validateToken(tokenUrl)) {
                console.log('tokenUrl: ' + tokenUrl);

                // consultar token e caso seja válido, armazenar
                if (tokenUrl !== null) {
                    this.auth.armazenarToken(route.paramMap.get('token'));

                    // armazenar tenantId também

                    console.log(localStorage.getItem('token'));
                    // console.log('ei');
                    // this.router.navigate(['/visao-geral']);
                } else {
                    console.log('nao autorizado');
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        } else {
            // token está ok e validado
            console.log('passou aqui');
            console.log(localStorage.getItem('token'));
        }
        */

        return true;

        /*
        const tokenTest = '220546';
        if (localStorage.getItem('token') === 'null') {
            this.auth.armazenarToken(route.paramMap.get('token'));
            console.log('token armazenado: ' +  localStorage.getItem('token'));
        } else {
            console.log( localStorage.getItem('token') );
        }
        */

        /*
        if (state.url === '/funcionarios') {
            this.router.navigate(['/nao-autorizado']);
            return false;
        }

        return true;
        */




        /*
        const tokenTest = '220546';

        if (localStorage.getItem('token') === 'null') {
            this.auth.armazenarToken(route.paramMap.get('token'));
            console.log('token armazenado: ' +  localStorage.getItem('token'));
        } else {
            console.log( localStorage.getItem('token') );
        }

        // return this.router.parseUrl('');
        */



        /*
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Navegação com access token inválido. Obtendo novo token...');

            if (localStorage.getItem('token') !== 'null') {
                console.log('token armazenado 1: ' +  localStorage.getItem('token'));
            } else {
                this.auth.armazenarToken(route.paramMap.get('token'));
                console.log('token 2');
            }

            this.auth.armazenarToken(route.paramMap.get('token'));

            console.log('token armazenado: ' +  localStorage.getItem('token'));


            // console.log('token armazenado: ' +  localStorage.getItem('token'));

            // this.router.navigate(['/funcionarios']);

            return true;
        } else {
            // this.router.navigate(['/nao-autorizado']);
            console.log('passou erro');
            return false;
        }

        return true;
        */
    }
}
