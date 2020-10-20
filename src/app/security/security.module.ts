import { LogoutService } from './logout.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SecurityRoutingModule } from './security-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SecurityRoutingModule
  ],
  providers: [
      AuthGuard,
      AuthService,
      LogoutService
  ]
})
export class SecurityModule { }
