import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SocialContractListComponent } from './social-contract-list/social-contract-list.component';

const routes: Routes = [
    { path: '', component: SocialContractListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialContractRoutingModule { }
