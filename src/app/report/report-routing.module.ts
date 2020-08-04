import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TrialBalanceReportComponent } from './trial-balance-report/trial-balance-report.component';
import { BalanceSheetReportComponent } from './balance-sheet-report/balance-sheet-report.component';
import { DreReportComponent } from './dre-report/dre-report.component';
import { ResultsAnalysisComponent } from './results-analysis/results-analysis.component';

const routes: Routes = [
    { path: 'balancete', component: TrialBalanceReportComponent },
    { path: 'balanco', component: BalanceSheetReportComponent },
    { path: 'dre', component: DreReportComponent },
    { path: 'analise-de-resultados', component: ResultsAnalysisComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
