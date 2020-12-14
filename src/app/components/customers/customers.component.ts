import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/services/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.query<Array<Customer>>({ sort: 'created', order: 'desc' })
      .subscribe(customers => {
        this.customers = customers;
      })
  }

}
