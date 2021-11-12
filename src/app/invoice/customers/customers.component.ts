import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomersService } from '../service/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.query<Array<Customer>>({ sort: 'created', order: 'desc' })
      .subscribe(customers => {
        this.customers = customers;
      })
  }
}