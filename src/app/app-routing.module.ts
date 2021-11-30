import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { DataDashboardComponent } from './data-center/data-dashboard/data-dashboard.component';
import { CustomersComponent } from './invoice/customers/customers.component';
import { CustomerComponent } from './invoice/customer/customer.component';
import { CustomerFormComponent } from './invoice/customer-form/customer-form.component';
import { InvoicesComponent } from './invoice/invoices/invoices.component';
import { InvoiceFormComponent } from './invoice/invoice-form/invoice-form.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'datacenter',
    component: DataDashboardComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard] },
  { path: 'invoices/create', component: InvoiceFormComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: 'customers/:customerId/edit', component: CustomerFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
