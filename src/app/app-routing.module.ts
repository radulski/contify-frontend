import { TenantGuardService } from './tenant-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'visao-geral', pathMatch: 'full' },

    {
        // path: 'funcionarios',
        // loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)

        path: ':tenantId/funcionarios',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
        canActivate: [TenantGuardService]
    },

    { path: 'visao-geral', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'contrato-social', loadChildren: () => import('./social-contract/social-contract.module').then(m => m.SocialContractModule) },
    { path: 'relatorios', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
    { path: '**', redirectTo: 'visao-geral' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
