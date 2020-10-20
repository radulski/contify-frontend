import { AuthGuard } from './../security/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'novo',
        component: EmployeeRegistrationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: ':codigo',
        component: EmployeeRegistrationComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
