import { EmployeeService } from './../employee.service';
import { Employee } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Router } from '../../../../node_modules/@angular/router';

import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

    isMeridian = false;
    // myTime = new Date();
    // mytime: Date = new Date();
    employee = new Employee();

    datePickerConfig: Partial<BsDatepickerConfig>;

    constructor(
        private employeeService: EmployeeService,
        private toasty: ToastyService,
        private router: Router,
        private localeService: BsLocaleService
    ) {
        localeService.use('pt-br');
        this.datePickerConfig = Object.assign( {}, { containerClass: 'theme-dark-blue'});
    }

    tenantId: string;

    ngOnInit(): void {
        this.tenantId = localStorage.getItem('tenantId');
    }

    salvar(form: FormControl): void {
        // console.log(this.employee);
         this.employeeService.adicionar(this.employee)
            .then(() => {
                // console.log('lançamento adicionado com sucesso');
                this.toasty.success('Funcionário adicionado com sucesso!');
                this.router.navigate(['/funcionarios']);
                // form.reset();
                // this.employee = new Employee();
            });
    }

    inputFileChange(event) {
        this.employeeService.inputFile(event);
    }

}
