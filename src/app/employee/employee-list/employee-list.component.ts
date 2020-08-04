import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    employees = [];
    tenantId: string;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // this.tenantId = this.route.snapshot.paramMap.get('tenantId');
        this.pesquisar();
        this.tenantId = localStorage.getItem('tenantId');
    }

    pesquisar(): void {
        this.employeeService.pesquisar()
            .then(employees =>
                this.employees = employees
            );
    }
}
