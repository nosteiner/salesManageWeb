import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import 'rxjs/add/observable/of';

import { Customer } from '../MODELS/Customer';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {
  dataSource: Array<Customer>

  displayedColumns = ['firstName', 'lastName', 'company', 'email', 'phone', 'buttons'];

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setCustomers()
  }
  setCustomers() {
    this.customerService.getAllCusomers().subscribe((customers) => {
      this.dataSource = customers;
     
    })
  }

  

  handleRemoveCustomer(id){
    this.customerService.removeCustomer(id).subscribe(()=>{
      console.log(id)
    this.setCustomers() 
    })
  }

  viewCustomer(id){
    this.router.navigate([`/view-customer/${id}`]);
  }
}



// export class CustomerDataSource extends DataSource<any> {
//   constructor(private customerService: CustomerService) {
//     super();
//   }
//   ngOnInit() {
//     this.connect()
//   }
//   connect(): Observable<Customer[]> {
//     return this.customerService.getAllCusomers();
//   }
//   disconnect() {}
// }



