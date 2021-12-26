import { Component, OnInit } from '@angular/core';
import { Invoice } from '../model/invoice.model';
import { InvoicesService } from '../service/invoices/invoices.service';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];
  constructor(
    private loadingService: TdLoadingService,
    private invoicesService : InvoicesService) { }

  ngOnInit() {
    this.loadingService.register('invoices');
    this.invoicesService.query<Array<Invoice>>()
      .subscribe(invoices => {
        this.invoices = invoices;
        this.loadingService.resolve('invoices');
      });
  }
}
