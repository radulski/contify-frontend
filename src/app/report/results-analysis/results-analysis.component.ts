import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-results-analysis',
    templateUrl: './results-analysis.component.html',
    styleUrls: ['./results-analysis.component.css']
})
export class ResultsAnalysisComponent implements OnInit {

    data: any;
    pieData: any;

    constructor() {
        this.pieData = {
            labels: ['Faturamento', 'Impostos', 'Lucro Bruto', 'Despesas Administrativas', 'Despesas Operacionais', 'Despesas Financeiras', 'Lucro Líquido'],
            datasets: [
                {
                    data: [300, 50, 100, 30, 40, 80, 90],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#2da05c',
                        '#d2792d',
                        '#ca3838',
                        '#184886'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#2da05c',
                        '#d2792d',
                        '#ca3838',
                        '#184886'
                    ]
                }]
            };
    }

    ngOnInit(): void {
    }
}
