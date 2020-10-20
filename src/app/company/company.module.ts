import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';



@NgModule({
  declarations: [CompanyListComponent, CompanyRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
