import { TenantService } from './tenant/tenant.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '../../node_modules/@angular/router';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TenantGuardService implements CanActivate {

    private clients: TenantService[];

    constructor(
        private router: Router,
        private tenantService: TenantService,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const id: string = route.params.tenantId;

        if (!id) {
            return this.router.parseUrl('');
        }

        // Pesquisar tenantId
        // this.tenantService.pesquisar();

        // caso localize, salvar no localStorage
        localStorage.setItem('tenantId', '6466db7a-2223-4b9d-ae15-0fd3df4efac5');

        // verificar se existe token no locaStorage, caso tenha retornar true, senão, consultar a empresa novamente e
        // salvar o localStage novamente após a consulta

        // let found: TenantService = this.clients.find(x => x.id.toLowerCase() == id.toLowerCase());

        // const found: Client = this.clients.find(x => x.id.toLowerCase() == id.toLowerCase());

        const found = true;

        if (!found) {
            return this.router.parseUrl('');
        }
        else {
            return true;
        }
    }
}
