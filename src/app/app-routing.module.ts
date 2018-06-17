import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


const routes: Routes = [
  { path: '', component: CustomersTableComponent},
  { path: 'new-customer', component: NewCustomerComponent },
{ path: 'view-customer/:id', component: ViewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
