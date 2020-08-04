import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrialBalanceReportComponent } from './trial-balance-report/trial-balance-report.component';
import { BalanceSheetReportComponent } from './balance-sheet-report/balance-sheet-report.component';
import { DreReportComponent } from './dre-report/dre-report.component';
import { ResultsAnalysisComponent } from './results-analysis/results-analysis.component';
import { ReportRoutingModule } from './report-routing.module';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [TrialBalanceReportComponent, BalanceSheetReportComponent, DreReportComponent, ResultsAnalysisComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ChartModule
  ]
})
export class ReportModule { }
