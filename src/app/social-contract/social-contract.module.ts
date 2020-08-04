import { SocialContractRoutingModule } from './social-contract-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SocialContractListComponent } from './social-contract-list/social-contract-list.component';

@NgModule({
  declarations: [SocialContractListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SocialContractRoutingModule
  ],
  exports: []
})
export class SocialContractModule { }
