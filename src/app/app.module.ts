import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



import { CustomerService } from './customer.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { HeaderComponent } from './header/header.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    NewCustomerComponent,
    CustomersTableComponent,
    HeaderComponent,
    ViewCustomerComponent
    
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLinkDelayModule,
  
    MatCardModule

    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
