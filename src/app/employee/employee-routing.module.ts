import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    { path: '', component: EmployeeListComponent },
    { path: ':tenantId/novo', component: EmployeeRegistrationComponent },
    { path: ':codigo', component: EmployeeRegistrationComponent },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
