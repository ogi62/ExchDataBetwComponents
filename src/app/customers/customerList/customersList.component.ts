import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'customersList',
  templateUrl: 'customersList.component.html',
  styleUrls: ['./customersList.component.scss'],
})
export class CustomersListComponent {
  selectedCustomer: Customer;
  customers: Customer[] = [
    {
      customerNo: 1,
      name: 'Rahuld Dravid',
      address: '',
      city: 'Banglaore',
      state: 'Karnataka',
      country: 'India',
    },
    {
      customerNo: 2,
      name: 'Sachin Tendulkar',
      address: '',
      city: 'Mumbai',
      state: 'Maharastra',
      country: 'India',
    },
    {
      customerNo: 3,
      name: 'Saurrav Ganguly',
      address: '',
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
    },
    {
      customerNo: 4,
      name: 'Mahendra Singh Dhoni',
      address: '',
      city: 'Ranchi',
      state: 'Bihar',
      country: 'India',
    },
    {
      customerNo: 5,
      name: 'Virat Kohli',
      address: '',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
    },
  ];

  showDetails(customer) {
    this.selectedCustomer = Object.assign({}, customer);
  }

  childChangedCustomer(customer: Customer) {
    const cust = this.customers.find(
      (e) => e.customerNo == customer.customerNo
    );
    //menjamo objekat stavljamo cust umesto customera
    Object.assign(cust, customer);
    alert('Customer Saved');
  }
}
