import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LogoutService } from './../../security/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    // tenantId: string;

    constructor(
        private logoutService: LogoutService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // this.tenantId = localStorage.getItem('tenantId');
    }

    logout(): any {
        this.logoutService.logout()
            .then(() => {
                this.router.navigate(['/login']);
            }).
            catch(erro => 'erro');
    }
}
