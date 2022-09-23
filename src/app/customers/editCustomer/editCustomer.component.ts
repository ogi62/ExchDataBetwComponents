import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'editCustomer',
  templateUrl: 'editCustomer.component.html',
  styleUrls: ['./editCustomer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  @Input() customer: Customer;
  @Output() customerChanged: EventEmitter<Customer> =
    new EventEmitter<Customer>();

  constructor() {}

  ngOnInit(): void {
    this.customer = new Customer();
  }

  update(customer: Customer) {
    this.customerChanged.emit(this.customer);
  }
}
