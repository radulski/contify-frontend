import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'cadastrar-empresa', component: RegistrationFormComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SecurityRoutingModule { }
