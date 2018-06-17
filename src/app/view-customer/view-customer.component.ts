import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
import { ActivatedRoute, Router } from '@angular/router';
import {Customer} from '../MODELS/Customer'

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customer : Customer= new Customer();

  constructor(private customerService : CustomerService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerService.getCusomer(params.id).subscribe((customer) => {
        this.customer = customer[0];
      });
    });
  }

}
