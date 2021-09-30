import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CustomerComponent, CustomersComponent, CustomerFormComponent],
  exports: [CustomerComponent, CustomersComponent,CustomerFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CovalentLoadingModule,
    CovalentDialogsModule
  ]
})
export class InvoiceModule { }
