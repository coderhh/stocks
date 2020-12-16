import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Customer } from 'src/app/services/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  constructor(private customersService: CustomersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .map((params: Params) => params.customerId)
      .switchMap(customerId => this.customersService.get<Customer>(customerId))
      .subscribe(customer => {
        this.customer = customer;
      });
  }
}
