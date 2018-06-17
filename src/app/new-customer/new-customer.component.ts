import { Component, OnInit } from '@angular/core';
import {Customer} from '../MODELS/Customer'
import {CustomerService} from '../customer.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  
  customer: Customer = new Customer();

  constructor(private customerService : CustomerService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }


  submitCustomer() {
    this.customerService.addCustomer(this.customer).subscribe((customer) => {
      this.customer = customer;
      // console.log(this.customer)
      this.router.navigate(['/']);
    });
  }

}
