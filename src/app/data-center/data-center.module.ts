import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { MetricComponent } from './metric/metric.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { DataDashboardComponent } from './data-dashboard/data-dashboard.component';

@NgModule({
  entryComponents: [NodesDetailComponent, AlertComponent],
  declarations: [AlertComponent, MetricComponent, NodesComponent, NodesDetailComponent, NodesRowComponent, DataDashboardComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DataCenterModule { }
