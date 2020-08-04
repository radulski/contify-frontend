import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    tenantId: string;

    ngOnInit(): void {
        this.tenantId = localStorage.getItem('tenantId');
    }
}
