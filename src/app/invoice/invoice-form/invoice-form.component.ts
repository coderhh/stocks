import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Invoice } from '../model/invoice.model';
import { Customer } from '../model/customer.model';
import { InvoicesService } from '../service/invoices/invoices.service';
import { CustomersService } from '../service/customers/customers.service';
import { HoursValidator } from '../validators/hours.validator';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  invoice: Invoice;
  customer: Customer;
  customers: Customer[];
  total = 0;

  constructor(
    private loadingService: TdLoadingService,
    private invoicesServie: InvoicesService,
    private router: Router,
    private dialogService: TdDialogService,
    private customersService: CustomersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.invoiceForm = this.formBuilder.group({
      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required, HoursValidator]],
      date: ['', Validators.required],
      paid: ['']
    });
   }

  ngOnInit(): void {
    this.loadingService.register('invoice');
    this.loadingService.register('customers');

    this.customersService.query<Array<Customer>>().subscribe(customers => {
      this.customers = customers;
      this.loadingService.resolve('customers');
    });

    this.route.params.pipe(
      map((params: Params) => params.invoiceId)
    ).subscribe(invoiceId => {
      if (invoiceId) {
        this.invoicesServie.get<Invoice>(invoiceId).subscribe(invoice => {
          this.invoiceForm.setValue(invoice);
          this.invoice = invoice;
          this.loadingService.resolve('invoice');
        });
      } else {
        this.invoice = new Invoice();
        this.loadingService.resolve('invoice');
      }
    });

    combineLatest(
      this.invoiceForm.get('rate').valueChanges,
      this.invoiceForm.get('hours').valueChanges
    ).subscribe(([rate = 0, hours = 0]) => {
      this.total = rate * hours;
    });
  }

  save() {
    if (this.invoice.id) {
      this.invoicesServie
        .update<Invoice>(this.invoice.id, this.invoiceForm.value)
        .subscribe(response => {
          this.viewInvoice(response.id);
        });
    } else {
      this.invoicesServie
        .create<Invoice>(this.invoiceForm.value)
        .subscribe(response => {
          this.viewInvoice(response.id);
        });
    }
  }

  delete() {
    this.dialogService
      .openConfirm({
        message: 'Are you sure you want to delete this invoice?',
        title: 'Confirm',
        acceptButton: 'Delete'
      })
      .afterClosed()
      .subscribe((accept: boolean) => {
        if (accept) {
          this.loadingService.register('invoice');
          this.invoicesServie.delete(this.invoice.id).subscribe(response => {
            this.loadingService.resolve('invoice');
            this.invoice.id = null;
            this.cancel();
          });
        }
      });
  }

  cancel() {
    if (this.invoice.id) {
      this.router.navigate(['/invoices', this.invoice.id]);
    } else {
      this.router.navigateByUrl('/invoices')
    }
  }

  private viewInvoice(id: number) {
    this.router.navigate(['/invoices', id]);
  }
}
