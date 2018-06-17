import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from './MODELS/Customer';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  private customerServiceUrl =  '/api/customers'

  getAllCusomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerServiceUrl)
  }
  
  getCusomer(id : number): Observable<Customer> {
    return this.http.get<Customer>(this.customerServiceUrl+`/${id}`);
  }

  addCustomer(newCustomer: Customer): Observable<Customer>{
return this.http.post<Customer>(this.customerServiceUrl, { customer: newCustomer })
  }

  removeCustomer(id : number): Observable<Customer>{
    return this.http.delete<Customer>(this.customerServiceUrl+'/deleteCustomer/'+id);
  }
}
