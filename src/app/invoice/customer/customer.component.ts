import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Customer } from 'src/app/invoice/model/customer.model';
import { CustomersService } from 'src/app/invoice/service/customers/customers.service';
import { map, switchMap } from 'rxjs/operators';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private loadingService: TdLoadingService) { }

  ngOnInit(): void {
    //this.loadingService.register('customer');
    this.route.params.pipe(
      map((params: Params) => params.customerId),
      switchMap((customerId: number) => this.customersService.get<Customer>(customerId)))
      .subscribe(
        customer => {this.customer = customer;
        //this.loadingService.resolve('customer');
      });
  }
}
