import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { DatadashboardComponent } from './components/data-center/datadashboard/datadashboard.component';
import { CustomersComponent } from './invoice/customers/customers.component';
import { CustomerComponent } from './invoice/customer/customer.component';
import { CustomerFormComponent } from './invoice/customer-form/customer-form.component';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoicesComponent } from './invoice/invoices/invoices.component';
import { InvoiceFormComponent } from './invoice/invoice-form/invoice-form.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';

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
  },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/create', component: InvoiceFormComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: 'customers/:customerId/edit', component: CustomerFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
