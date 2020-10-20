import { NotAuthorizedComponent } from './core/not-authorized.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'visao-geral',
        pathMatch: 'full'
    },
    {
        path: 'nao-autorizado',
        component: NotAuthorizedComponent
    },
    {
        path: 'funcionarios',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
    },
    {
        path: 'external_login_token/access_url/:token',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'visao-geral',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'contrato-social',
        loadChildren: () => import('./social-contract/social-contract.module').then(m => m.SocialContractModule)
    },
    {
        path: 'relatorios',
        loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
    },
    {
        path: '**',
        redirectTo: 'visao-geral'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
