import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NotAuthorizedComponent } from './not-authorized.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        NotAuthorizedComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})
export class CoreModule { }
