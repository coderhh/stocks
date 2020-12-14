import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { DatadashboardComponent } from './components/data-center/datadashboard/datadashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
  },
  {
    path: 'datacenter',
    component: DatadashboardComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
