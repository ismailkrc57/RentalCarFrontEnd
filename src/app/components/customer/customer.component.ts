import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/entities/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }
  getAllCustomer() {
    this.customerService.getAllCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}
