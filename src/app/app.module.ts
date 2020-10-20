import { SocialContractModule } from './social-contract/social-contract.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { EmployeeService } from './employee/employee.service';
import { CoreModule } from './core/core.module';
import { ToastyModule } from 'ng2-toasty';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    SecurityModule,
    AppRoutingModule,
    SocialContractModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
