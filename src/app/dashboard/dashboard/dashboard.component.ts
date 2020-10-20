import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    data: any;
    options: any;
    lineData: any;
    lineOptions: any;

    constructor() {
        this.data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    label: 'Receitas',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                },
                /*
                {
                    label: 'Despesas',
                    data: [28, 48, 40, 19, 86, 27, 90, 56, 55, 40, 65, 59],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                },
                */

            ]
        };

        this.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false
            }
        };

        this.lineData = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    label: 'Receitas',
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                },
                {
                    label: 'Despesas',
                    data: [28, 48, 40, 19, 86, 27, 90, 56, 55, 40, 65, 59],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                },

            ]
        };

        this.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 0
                    }
                }]
            },
            legend: {
                display: false
            }
        };

        this.lineOptions = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        };
    }

    ngOnInit(): void {
    }

}
